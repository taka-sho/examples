module.exports = {
  'should display Sample1': (browser: any) => {
    const element: string = '#content ul li a'
    browser
      .url('http://localhost:8080/fw/ReactTraining/react-router/')
      .waitForElementVisible(element, 1000)
      .assert.containsText(element, 'sample2')
      .end()
  },
  'should change to Sample2': (browser: any) => {
    const element: string = '#content ul li a'
    browser
      .url('http://localhost:8080/fw/ReactTraining/react-router/')
      .waitForElementVisible(element, 1000)
      .click(element)
      .pause(500)
      .assert.containsText(element, 'sample1')
      .end()
  }
}
