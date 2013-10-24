# Messages Frontend

This simple single page application runs against the REST API exposed in [messages](http://github.com/timfpark/messages).

## Getting Started 

This application utilizes the [Yeoman](http://yeoman.io) frontend workflow system - you can install that using:

`npm install -g yo`
`npm install -g grunt`
`npm install -g grunt-cli`

Finally install all of the local packages for the build system:

`npm install`

It also uses compass, which is a SASS compiler to manage building Twitter Bootstrap.  To install that, you need to install Ruby on your system.  For Windows users, there are prepackaged binaries that you can use to do this.  Have a look at (http://rubyinstaller.org/)[http://rubyinstaller.org/] for more details.

Once you have Ruby installed, install the compass gem:

`gem install compass`

We're using an ember.js application in this sample, so also install the generator for this application type:

`npm install -g generator-ember`

Then, if you want to start clean with your own ember.js app, do:

`yo ember`

in a blank directory and Yeoman will scaffold an ember.js application for you, including build tools.   Or you can just 
clone and start with this repo for your work.

## Fetching dependencies

Yeoman uses bower for frontend dependencies. Bower automatically fetches and keeps the dependencies updated that your project relies on.  You can think of it as a frontend package manager that works sort of like `npm` does for node.js modules.   To install your dependencies:

`bower install`

## Running Messages 

You can start a server locally and run this application using:

`grunt server`

## Deploying Messages

Before deploying messages you first need to build the deployment assets that have been consolidated and minified:

`grunt build`

This should build a `dist` directory at the top level of this project with the assets that need to be deployed.  I've
included a script that copies this to a deployment Git repo and readies it for deployment.  

If this is your first time deploying, create this deployment directory at the same level as messages-frontend called messages-deploy and 
run `git init` in it to initialize a git repo.

Then run:

`scripts/prep-deployment`

This combines and minifies the JavaScript, HTML, and CSS into single files.

You can Git deploy this application to Windows Azure directly.  Just create a new Web Site in Windows Azure and then configure a Git repo in Windows Azure in the dashboard tab for that website.  Then just `git push` this deployment repo to that site. 
