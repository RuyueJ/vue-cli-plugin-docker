/*  generator (optional)
A generator can inject additional dependencies or fields into 
package.json and add files to the project.

We are going to use it to add Dockerfile
*/


// add new npm tasks to the project
module.exports = (api, options, rootOptions) => {
    // api.extendPackage({
    //     scripts: {

    //     }
    // });

    if (options.addTemplateDockerNode) {
        api.render('./template/node', {
          ...options,
        });
    }
}

