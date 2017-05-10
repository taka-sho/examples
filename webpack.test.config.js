const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, 'test/react-router.test.ts')
  ],
  output: {
    path: path.join(__dirname, 'tmp/'),
    filename: 'test.bundle.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' }
    ]
  }
}
