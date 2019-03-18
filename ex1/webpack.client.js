const path = require("path");

module.exports = {
  // Tell webpack the root file of our
  // client application
  entry: ["./src/index.js"],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build"
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 versions"] }
              }
            ]
          ]
        }
      }
    ]
  }
};
