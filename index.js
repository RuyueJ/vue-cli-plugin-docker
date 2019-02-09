/* service plugin
A service plugin should export a function which receives two arguments:
a pluginAPI instance and object containing project local options.
It can extend/modify the internal webpack config for different environments
and inject additional commands to vue-cli-service.

In this project we don't want to change webpack config or create an addictional
npm task. We want just to add some dependencies and example component if necessary
*/

module.exports = (api, opts) => {}