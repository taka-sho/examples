const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    'react': path.join(__dirname, 'src/app/react/index.tsx'),
    'angular': path.join(__dirname, 'src/app/angular1/main.ts'),
    'angular2': path.join(__dirname, 'src/app/angular2/main.ts'),
    'riot': path.join(__dirname, 'src/app/riot/index.ts'),
    'vue': path.join(__dirname, 'src/app/vue/index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist/assets/'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {'vue$': 'vue/dist/vue.common.js'}
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
