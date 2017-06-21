exports.config = {
  framework: 'mocha',
  capabilities: {
    browserName: 'chrome'
  },
  mochaOpts: {
    ui: 'bdd',
    reporter: 'spec',
    timeout: 10000
  },
  specs: ['tmp/*.test.js'],
  directConnect: true
}
