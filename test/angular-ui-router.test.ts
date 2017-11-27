const selector: string = 'div[ui-view] ul li a'
module.exports = {
  'should display Sample1': (browser: any) => {
    browser
      .url('http://localhost:8080/fw/angular-ui/ui-router/')
      .waitForElementVisible(selector, 1000)
      .assert.containsText(selector, 'Sample2')
      .end()
  },
  'should change to Sample2': (browser: any) => {
    browser
      .url('http://localhost:8080/fw/angular-ui/ui-router/')
      .waitForElementVisible(selector, 1000)
      .click(selector)
      .pause(500)
      .assert.containsText(selector, 'Sample1')
      .end()
  }
}
