const path = require('path')

module.exports = {
  entry: {
    'react': path.join(__dirname, 'src/app/react/index.tsx')
  },
  output: {
    sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].bundle.js'
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
