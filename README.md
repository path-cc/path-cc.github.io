# PATh - Partnership to Advance Throughput Computing

- [Development](#development)
- [Building Locally](#installing-ruby-&-jekyll)
- [Using Github Automatic Previews](#using-github-for-development)
- [Using Docker Container](#using-docker-for-development)
- [Pushing Changes to Production](#pushing-changes-to-production)


[PATh](https://path-cc.io/) brings together the Center for High Throughput Computing and the OSG in order to advance the nation’s campuses and science communities through the use of distributed High Throughput Computing.

Thie website is a [Jekyll](https://jekyllrb.com/) based website.  The theme is based on [Jekyll-Serif](https://github.com/zerostaticthemes/jekyll-serif-theme).  Please create a pull request to modify the website.

# Deployment

To have you changes merged into the main website you must create a PR and get one review before you are allowed to merge. If you don't have anyone in mind you can request _@CannonLock_ and he will review it the next morning.

# Development

The following three guides contain a method to view your website changes before creating a PR.

### Installing Ruby & Jekyll
 
If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Using Github for Development

1. Create a Branch from master with 'preview-' at the start of the branch name
  - For instance 'preview-helloworld'
2. Push this branch to the repo at https://github.com/path-cc/path-cc.github.io.git
  - If you created the branch on github it is already there!
4. Populate the changes that you want to see
5. Preview the changes that you have made at https://path-cc.io/web-preview/<branch-name\>/ 
  - For this instance https://path-cc.io/web-preview/preview-helloworld/
6. When you are happy with the changes create a PR into master

### Using Docker for Development

```
# From website root
git submodule update --init --recursive --remote
docker compose up
```

# Pushing Changes to Production

The production website (https://path-cc.io/) is built automatically by GitHub Pages from the **master** branch.

To make changes to the website, use the following workflow:

1.  Submit a pull request with website updates to the `master` branch (the default) and request a review.
    - Any reviews with visual changes can be handled more quickly if you provide a [preview instance](#using-github-for-development)
1.  Upon approval and merge you can view the changes at https://path-cc.io
