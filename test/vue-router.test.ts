module.exports = {
  'should display Sample1': (browser: any) => {
    browser
      .url('http://localhost:8080/fw/vuejs/vue-router/')
      .waitForElementVisible('#app a', 1000)
      .assert.containsText('#app a', 'Sample2')
      .end()
  },
  'should change to Sample2': (browser: any) => {
    browser
      .url('http://localhost:8080/fw/vuejs/vue-router/')
      .waitForElementVisible('#app a', 1000)
      .click('#app a')
      .pause(500)
      .assert.containsText('#app a', 'Sample1')
      .end()
  }
}
