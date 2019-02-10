# vue-cli-plugin-docker
## Test the plugin locally
First, let’s create a simple vue-cli project:

`vue create test-docker-local`

Go to the project folder and install the newly created plugin:

`cd test-docker-local`
`npm install --save-dev file:/full/path/to/your/plugin`

After plugin is installed, invoke it:

`vue invoke vue-cli-plugin-docker-rj`

Now, if you check the root, you can see the Dockerfile & docker-compose.yml have been added

Also, you can find your plugin in package.json of your test app
