module.exports = {
  'should display Sample1': (browser: any) => {
    const element: string = 'app a'
    browser
      .url('http://localhost:8080/fw/angular/router/')
      .waitForElementVisible(element, 1000)
      .assert.containsText(element, 'Sample2')
      .end()
  },
  'should change to Sample2': (browser: any) => {
    const element: string = 'app a'
    browser
      .url('http://localhost:8080/fw/angular/router/')
      .waitForElementVisible(element, 1000)
      .click(element)
      .pause(500)
      .assert.containsText(element, 'Sample1')
      .end()
  }
}
