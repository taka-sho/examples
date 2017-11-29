module.exports = {
  'set input form elements': (browser: any) => {
    const email: string = 'userdive@example.com'
    const element: string = '.form-group:first-of-type .form-controll'
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .setValue(element, email.split(''))
      .assert.value(element, email)
      .end()
  },
  'select a value': (browser: any) => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 1000)
      .click('select[class="form-control"] option:nth-child(2)')
      .assert.value('select[class="form-control"]', 'example2')
      .end()
  }
}
