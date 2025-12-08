import { fetchForBackup, fetchWithBackup } from "/assets/js/backup.js";
import {getInstitutionsOverview, getProjects} from "/assets/js/adstash.mjs"
import {byteStringToBytes, formatBytes, locale_int_string_sort, sortByteString, string_sort} from "/assets/js/util.js";
import {PieChart} from "/assets/js/components/pie-chart.js";
import ProjectDisplay from "/assets/js/components/ProjectDisplay.mjs";
import {Grid, PluginPosition, BaseComponent, h} from "https://unpkg.com/gridjs@5.1.0/dist/gridjs.module.js"

const formatOrg = (cell, row, column) => {

    let url = row?._cells?.[5]?.['data']

    // If url has no protocol add https
    if(url !== undefined && !url.startsWith("http")) {
        url = "https://" + url
    }

    if(url !== undefined) {
        return h('td', {}, h('a', {href: url, target: '_blank'}, cell))
    }

    return h('td', {}, cell)
}

class Table {
    constructor(wrapper, data_function, updateProjectDisplay){
        this.grid = undefined
        this.data_function = data_function
        this.wrapper = wrapper
        this.updateProjectDisplay = updateProjectDisplay
        this.columns = [
            {
                id: 'projectName',
                name: 'Name',
                sort: { compare: string_sort },
                attributes: {
                    className: "gridjs-th gridjs-td pointer gridjs-th-sort text-start"
                }
            }, {
                id: 'numJobs',
                name: 'Jobs Ran',
                data: (row) => Math.floor(row.numJobs).toLocaleString(),
                sort: { compare: locale_int_string_sort }
            }, {
                id: 'osdfByteTransferCount',
                name: 'Bytes Transferred',
                sort: { compare: sortByteString },
                data: (row) => formatBytes(row.osdfByteTransferCount),
                attributes: (cell, row, column) => {
                    if(cell !== null && table?.data !== undefined){
                        const data = table.data
                        const maxByteCount = Math.max(...Object.values(data).map(x => x.osdfByteTransferCount))
                        const cellValue = byteStringToBytes(cell)
                        const colorValue = Math.min(1, 1 - Math.log(4 * (cellValue / maxByteCount) + 1))
                        const color = whiteorange(colorValue) // 1 - Math.log((cellValue / maxFileCount))
                        return {style: {backgroundColor: color}, className: "text-end"}
                    }
                }
            }, {
                id: 'Organization',
                name: 'Organization',
                sort: { compare: string_sort },
                attributes: {
                    className: "gridjs-th gridjs-td pointer gridjs-th-sort text-start"
                },
                formatter: formatOrg
            }, {
                id: 'detailedFieldOfScience',
                name: 'Field Of Science',
                sort: { compare: string_sort },
                attributes: {
                    className: "gridjs-th gridjs-td pointer gridjs-th-sort text-start"
                }
            }, {
                id: 'projectInstitutionIpedsWebsiteAddress',
                hidden: true
            }
        ]

        let table = this;
        this.grid =  new Grid({
            columns: table.columns,
            sort: true,
            search: {
                enabled: true
            },
            className: {
                container: "",
                table: "table table-hover",
                td: "pointer",
                paginationButton: "mt-2 mt-sm-0"
            },
            data: async () => Object.values(await table.data_function()).sort((a, b) => b.numJobs - a.numJobs),
            pagination: {
                enabled: true,
                limit: 10,
                buttonsCount: 1
            },
            style: {
                td: {
                    'text-align': 'right'
                }
            }
        }).render(table.wrapper);
        this.grid.on('rowClick', this.row_click);
    }

    render () {
        this.grid.forceRender()
    }

    row_click = async (PointerEvent, e) => {
        let data = await this.data_function()
        let row_name = e["cells"][0].data
        let project = data[row_name]
        this.updateProjectDisplay({...project, FieldOfScience: project.detailedFieldOfScience})
    }
}

class DataManager {
    constructor(filters, consumerToggles, errorNode) {
        this.filters = filters ? filters : {}
        this.consumerToggles = consumerToggles ? consumerToggles : []
        this.errorNode = errorNode ? errorNode : document.getElementById("error")
        this.error = undefined
    }

    toggleConsumers = () => {
        this.consumerToggles.forEach(f => f())
    }

    addFilter = (name, filter) => {
        this.filters[name] = filter
        this.toggleConsumers()
    }

    removeFilter = (name) => {
        delete this.filters[name]
        this.toggleConsumers()
    }

    getData = async () => {
        if(!this.data) {
            this.data = this._getData()
        }
        return this.data
    }

    set error(error){
        if(error){
            this.errorNode.textContent = error
            this.errorNode.style.display = "block"
        } else {
            this.errorNode.style.display = "none"
        }
    }

    _getData = async () => {

        let topologyData = [];
        try {
          topologyData = (await fetchWithBackup(fetchForBackup, "https://topology.opensciencegrid.org/miscproject/json"))['data']
        } catch (e) {
          this.error = "Error fetching topology data, learn more on the OSG status page: status.osg-htc.org"
        }
        let usageJson;
        try {
            usageJson = (await fetchWithBackup(getProjects))['data']
        } catch(e) {
            this.error = "Error fetching usage data, learn more on the OSG status page: status.osg-htc.org"
        }

        this.data = Object.entries(topologyData).reduce((p, [k,v]) => {
            if(k in usageJson){
                p[k] = {...v, ...usageJson[k]}
            }
            return p
        }, {})

        return this.data
    }

    /**
     * Filters the original data and returns the remaining data
     * @returns {Promise<*>}
     */
    getFilteredData = async () => {
        let filteredData = await this.getData()
        for(const filter of Object.values(this.filters)) {
            filteredData = filter(filteredData)
        }
        return filteredData
    }

    reduceByKey = async (key, value) => {
        let data = await this.getFilteredData()
        let reducedData = Object.values(data).reduce((p, v) => {
            if(v[key] in p) {
                p[v[key]] += v[value]
            } else {
                p[v[key]] = v[value]
            }
            return p
        }, {})
        let sortedData = Object.entries(reducedData)
            .filter(([k,v]) => v > 0)
            .map(([k,v]) => {return {label: k, [value]: Math.round(v)}})
            .sort((a, b) => b[value] - a[value])
        return {
            labels: sortedData.map(x => x.label),
            data: sortedData.map(x => x[value])
        }
    }

}

class ProjectPage{
    constructor() {
        this.initialize()
    }

    /**
     * Initializes the project page objects
     *
     * Easier to do this all in an async environment so I can wait on data grabs
     * @returns {Promise<void>}
     */
    initialize = async () => {
        this.mode = undefined
        this.dataManager = new DataManager()

        let projectDisplayNode = document.getElementById("project-display")
        this.projectDisplay = new ProjectDisplay(projectDisplayNode)

        this.wrapper = document.getElementById("wrapper")
        this.table = new Table(this.wrapper, this.dataManager.getFilteredData, this.projectDisplay.update.bind(this.projectDisplay))

        this.dataManager.addFilter("search", this.search.filter)

        let urlProject = new URLSearchParams(window.location.search).get('project')
        if(urlProject){
            this.projectDisplay.update((await this.dataManager.getData())[urlProject])
        }

        this.orgPieChart = new PieChart(
            "project-fos-cpu-summary",
            this.dataManager.reduceByKey.bind(this.dataManager, "detailedFieldOfScience", "cpuHours"),
            "# of CPU Hours by Field of Science"
        )
        this.FosPieChart = new PieChart(
            "project-fos-job-summary",
            this.dataManager.reduceByKey.bind(this.dataManager, "detailedFieldOfScience", "numJobs"),
            "# of Jobs by Field Of Science"
        )
        this.jobPieChart = new PieChart(
            "project-job-summary",
            this.dataManager.reduceByKey.bind(this.dataManager, "projectName", "numJobs"),
            "# of Jobs by Project",
            ({label, value}) => {
                this.table.updateProjectDisplay(this.dataManager.data[label])
            }
        )
        this.cpuPieChart = new PieChart(
            "project-cpu-summary",
            this.dataManager.reduceByKey.bind(this.dataManager, "projectName", "cpuHours"),
            "# of CPU Hours by Project",
            ({label, value}) => {
                this.table.updateProjectDisplay(this.dataManager.data[label])
            }
        )
        this.gpuPieChart = new PieChart(
            "project-gpu-summary",
            this.dataManager.reduceByKey.bind(this.dataManager, "projectName", "gpuHours"),
            "# of GPU Hours by Project",
            ({label, value}) => {
                this.table.updateProjectDisplay(this.dataManager.data[label])
            }
        )

        this.dataManager.consumerToggles.push(this.orgPieChart.update)
        this.dataManager.consumerToggles.push(this.FosPieChart.update)
        this.dataManager.consumerToggles.push(this.jobPieChart.update)
        this.dataManager.consumerToggles.push(this.cpuPieChart.update)
        this.dataManager.consumerToggles.push(this.gpuPieChart.update)
    }
}

class NrpOverview {

    constructor() {
        this.initialize()
    }

    async initialize() {
        const timeConfigs = [
            {timespan: 1, cardSuffix: 'day'},
            {timespan: 7, cardSuffix: 'week'},
            {timespan: 30, cardSuffix: 'month'}
        ];
        // Fetch all data in parallel
        const results = await Promise.all(timeConfigs.map(cfg => this.getData(cfg.timespan)));
        // Update card sections
        results.forEach((data, idx) => {
            const cardSuffix = timeConfigs[idx].cardSuffix;
            if (document.querySelector(`.card-cpu-${cardSuffix}`)) {
                document.querySelector(`.card-cpu-${cardSuffix}`).textContent = data['cpu'] ? Number(data['cpu']).toLocaleString() : 'N/A';
            }
            if (document.querySelector(`.card-memory-${cardSuffix}`)) {
                document.querySelector(`.card-memory-${cardSuffix}`).textContent = data['memory'] ? Number(data['memory']).toLocaleString() : 'N/A';
            }
            if (document.querySelector(`.card-gpu-${cardSuffix}`)) {
                document.querySelector(`.card-gpu-${cardSuffix}`).textContent = data['gpu'] ? Number(data['gpu']).toLocaleString() : 'N/A';
            }
        });
    }

    async getData(timespan) {

        const currentTimestamp = Math.floor(Date.now() / 1000)
        const response = await fetch(`https://thanos.nrp-nautilus.io/api/v1/query?query=sum%20by(resource)%20(sum_over_time(namespace_used_resources{namespace=~%22osg-opportunistic|icecube-ml|osg-icecube|osg-ligo|osg-nrao%22}[${timespan}d:1h]@${currentTimestamp}))&dedup=true&partial_response=false`)
        const data = await response.json()
        return data['data']['result'].reduce((acc, item) => {
            return {
                ...acc,
                [item['metric']['resource']]: item['value'][1]
            }
        }, {})
    }
}

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

const project_page = new ProjectPage()
const nrp_overview = new NrpOverview()
