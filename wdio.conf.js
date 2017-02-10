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
  waitforTimeout: 10000000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone'],
  mochaOpts: {
    ui: 'bdd',
    compilers: ['ts:ts-node/register']
  }
}
