const path = require('path');

module.exports = {
  // Other Webpack configurations...
  resolve: {
    fallback: {
      http: false,
      crypto: require.resolve('crypto-browserify'),
    },
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Loaders and plugins configuration
};
