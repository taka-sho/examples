export default {
  from: './src/app/riot/tags/',
  to: './tags/',
  ext: 'pug',
  template: 'pug',
  type: 'typescript',
  parserOptions: {
    type: {module: 'commonjs'}
  }
}
