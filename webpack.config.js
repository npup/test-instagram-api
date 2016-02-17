
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
        "test": /.jsx?$/,
        "loader": "babel-loader",
        "exclude": /node_modules/,
        "query": {
          "presets": ["es2015", "react"]
        }
      }
    ]
  }
};
