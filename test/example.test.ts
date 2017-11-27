module.exports = {
  'set input form elements': (browser: any) => {
    const email: string = 'userdive@example.com'

    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 10000)
      .setValue('.form-group:first-of-type .form-controll', email.split(''))
      .assert.value('.form-group:first-of-type .form-controll', email)
      .end()
  },
  'select a value': (browser: any) => {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('body', 10000)
      .click('select[class="form-control"] option:nth-child(2)')
      .assert.value('select[class="form-control"]', 'example2')
      .end()
  }
}
