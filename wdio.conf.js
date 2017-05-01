exports.config = {
  specs: ['./test/*.ts'],
  exclude: [],
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  connectionRetryCount: 3,
  framework: 'mocha',
  services: ['selenium-standalone'],
  waitforTimeout: 30000,
  mochaOpts: {
    ui: 'bdd',
    timeout: 99999999,
    compilers: ['ts:ts-node/register']
  }
}
