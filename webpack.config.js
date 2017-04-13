var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === "production");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: []
};

if (inProduction) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
