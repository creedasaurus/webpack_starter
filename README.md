# Simple Webpack Starter

I understand there are a million boilerplates out there, especially for webpack and related build tools. But I kind of wanted to make my own minimal webpack starter for a React app with hot reloading with a separate backend (currently Node, but interchangable) in the same repo for fast and easy development.

## Getting Started
* Install dependencies with `npm install`
* Start development with `npm start` and visit [http://localhost:9000](localhost:9000)
* Build for prod and run node server with `npm run frontend && npm run backend` and visit [http://localhost:3000](localhost:3000)

### Give it a try
Once you have the development server running with `npm start`, open your browser to [http://localhost:9000](localhost:9000) and try some of the following to see the results of hot reloading. Open up Chrome Dev tools and watch the console output. Also check out the output of `npm start` to see it working as you change things.

* In `App.jsx`, change or add some elements or text. Notice how quickly it changes in the browser without the need to refresh the page. Notice also that it doesn't make the api call again after the hot reload. This means it is maintaining state.
* Another state example would be in `StateComponent.jsx` where you can toggle the state off some text. You can also change and resave that file and hot reloading will keep the state of the component but will update the text.
* One exception to the hot reloading is the HTML template in `static/index.html`. This file is used by webpack. It does trigger webpack, however you do have to refresh the page to see the change. Luckily you shouldn't have to do this often when using React.

### Details
#### NPM scripts
```json
"scripts": {
  "frontend": "webpack --config webpack.prod.config.js",
  "backend": "NODE_ENV=production node backend/index.js",
  "frontend-watch": "webpack-dev-server --color --watch --config webpack.dev.config.js",
  "backend-watch": "NODE_ENV=development nodemon backend/index.js",
  "start": "concurrently npm:frontend-watch npm:backend-watch"
}
```
* `frontend` will simply run webpack using the production config to bundle and minify, outputing to a folder `build`
* `backend` will run the node server, setting the production flag -- you will notice in the server file that it depends on this flag to know if it should be serving the static files or not. In development, webpack-dev-server does the file serving, node simply handles any calls to `/api`
* `frontend-watch` uses webpack-dev-server and the dev config to server and rebuild the frontend files.
* `backend-watch` sets the development flag and runs the node server
* `start` will run both `frontend-watch` and `backend-watch` concurrently, hot reloading or restarting when necessary

#### Webpack config
I use webpack only for the frontend code (for this simple example I found no reason to bundle and transpile the server code).
```js
devServer: {
  contentBase: path.join(__dirname, 'build'),
  hot: true,
  compress: true,
  port: 9000,
  proxy: {
    '/api': 'http://localhost:3000',
  },
}
```
^ This is the portion of code in the dev webpack that will host the files on `9000` and proxy any calls starting with `/api` back to whatever api server is running on `3000`. This is nice because it decouples the front and backend. So if I were to swap out the Node server with a Go server with the same api, the browser code would remain exactly the same.

##### Notes
It would not be terribly difficult to use this start with non-react code too, as long as you can use webpack/babel. You'd just want to remove things referring to `.jsx` or `react`. I may keep a branck on this repo that will have it using another framework like Vue or something. We'll see.
