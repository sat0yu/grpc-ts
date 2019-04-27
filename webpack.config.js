const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "server.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.ts$/,
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.json"
        }
      }
    ]
  }
};
