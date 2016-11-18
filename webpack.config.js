const path = require('path')

module.exports = {
  entry: {
    'react': path.join(__dirname, 'src/app/react/index.tsx'),
    'angular': path.join(__dirname, 'src/app/angular1/main.ts'),
    'riot': [
      path.join(__dirname, 'src/app/riot/index.ts'),
      path.join(__dirname, 'src/app/riot/tags/top.js'),
      path.join(__dirname, 'node_modules/riot-route/dist/route.min.js')
    ]
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
