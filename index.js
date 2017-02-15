// the name of provider is used by koop to help build default routes for FeatureService and a preview
const pkg = require('./package.json')
const provider = {
  name: 'craigslist',
  hosts: true,
  Model: require('./craigslist'),
  version: pkg.version,
  type: 'provider'
}

module.exports = provider
