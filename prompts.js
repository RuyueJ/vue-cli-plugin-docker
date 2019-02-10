/* prompts file (optional)
We want the plugin to ask if user wants to have 
an example component or not.
*/

module.exports = [
    {
      name: `addTemplateDockerNode`,
      type: 'confirm',
      message: 'Add Template Dockerfiles for node?',
      default: false,
    }
  ];