const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'react': path.join(__dirname, 'src/app/react/index.tsx'),
    'angular': path.join(__dirname, 'src/app/angular1/main.ts'),
    'riot': path.join(__dirname, 'src/app/riot/index.ts')
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
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
}
