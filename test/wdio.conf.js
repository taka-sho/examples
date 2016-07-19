exports.config = {
    specs: [
        './test/test.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'https://uncovertruth.github.io/examples/t/simple.html',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
}
