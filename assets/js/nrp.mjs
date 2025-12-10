export const updateTotals = async (timeConfigs) => {
    // Fetch all data in parallel
    return await Promise.all(timeConfigs.map(cfg => getNrpPrometheusData(cfg.timespan, "~%22osg-opportunistic|icecube-ml|osg-icecube|osg-ligo|osg-nrao%22")));
}

export const getNrpPrometheusData = async (timespan, namespaceFilter=null) => {
    const currentTimestamp = Math.floor(Date.now() / 1000)
    const response = await fetch(`https://thanos.nrp-nautilus.io/api/v1/query?query=sum%20by(resource)%20(sum_over_time(namespace_used_resources{namespace=${namespaceFilter}}[${timespan}d:1h]@${currentTimestamp}))&dedup=true&partial_response=false`)
    const data = await response.json()
    return data['data']['result'].reduce((acc, item) => {
        return {
            ...acc,
            [item['metric']['resource']]: item['value'][1]
        }
    }, {})
}
