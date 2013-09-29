Messages Frontend

This simple single page application runs against the REST API exposed in [messages](http://github.com/timfpark/messages).

==GETTING STARTED==

This application utilizes the [Yeoman](http://yeoman.io) frontend workflow system - you can install that using:

`npm install -g yo`

We're using an ember.js application in this sample, so also install the generator for this application type:

`npm install -g generator-ember`

Then, if you want to start clean with your own ember.js app, do:

`yo ember`

in a blank directory and Yeoman will scaffold an ember.js application for you, including build tools.   Or you can just 
clone and start with this repo for your work.

==RUNNING MESSAGES==

You can start a server locally and run this application using:

`grunt server`

==DEPLOYING MESSAGES==

Before deploying messages you first need to build the deployment assets that have been consolidated and minified:

`grunt build`

This should build a `dist` directory at the top level of this project with the assets that need to be deployed.  I've
included a script that copies this to a deployment Git repo and readies it for deployment.  

If this is your first time deploying, create this deployment directory at the same level as messages-frontend called messages-deploy and 
run `git init` in it to initialize a git repo.

Then run:

`scripts/prep-deployment`

This combines and minifies the JavaScript, HTML, and CSS into a single 

You can Git deploy this application to Windows Azure directly.  Just create a new Web Site in Windows Azure and then
configure a Git repo in Windows Azure in the dashboard tab for that website.  Then just `git push` this 
