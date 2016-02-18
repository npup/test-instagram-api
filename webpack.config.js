
module.exports = {
  "entry": "./src/index.js",
  "output": {
    "path": __dirname,
    "filename": "dist/app.js"
  },
  "module": {
    "loaders": [
      { "test": /\.scss$/, "loader": "style!css!sass" }
      , {
        "test": /.js$/,
        "loader": "babel-loader",
        "exclude": /node_modules/,
        "query": {
          "presets": ["es2015"]
        }
      }
    ]
  }
};
