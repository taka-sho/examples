exports.config = {
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    timeout: 10000
  },
  specs: ['tmp/*.test.js'],
  directConnect: true
}
