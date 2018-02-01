
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  }
};
