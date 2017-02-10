exports.config = {
  specs: [
    './test/*.ts'
  ],
  exclude: [],
  capabilities: [
    {
      browserName: 'firefox'
    }
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['ts:ts-node/register'],
    timeout: 10000
  }
}
