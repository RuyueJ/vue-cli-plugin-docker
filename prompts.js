/* prompts file (optional)
We want the plugin to ask if user wants to have 
an example component or not.
*/

module.exports = [
    {
      name: `addTemplateDockerfile`,
      type: 'confirm',
      message: 'Add Template Dockerfile?',
      default: false,
    },
    {
      name: `addTemplateDocker_Compose`,
      type: 'confirm',
      message: 'Add Template docker-compose.yml?',
      default: false,
    }
  ];