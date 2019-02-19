var webpack = require('webpack');
var entries = {
  background: ["./extension/src/background.js"],
  content: ["./extension/src/content.js"],
  // backend: ["./extension/src/backend.js"],
  // omnibox: ["./extension/src/omnibox.js"],
  // "omnibox-page": ["./extension/src/omnibox-page.js"]
};
var config = {
  context: __dirname + '/extension', // `__dirname` is root of project and `/src` is source
  entry: entries,
  output: {
    path: __dirname + '/dist', // `/dist` is the destination
    filename: 'bundle.js', // bundle created by webpack it will contain all our app logic. we will link to this .js file from our html page.
  },
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        loader: "babel-loader" // apply this loader for js files
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // the order is important. it executes in reverse order !
          'css-loader' // this will load first !
        ]
      }
    ]
  }
};

module.exports = config;