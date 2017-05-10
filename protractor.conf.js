exports.config = {
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec'
  },
  specs: ['tmp/test.bundle.js'],
  directConnect: true
}
