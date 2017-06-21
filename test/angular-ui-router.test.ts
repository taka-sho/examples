import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

describe('angular-ui-router', function () {
  const root = 'http://localhost:8080/fw/angular-ui/ui-router/#!/'
  const linkButton: any = element(by.css('div[ui-view] ul li a'))
  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:8080/fw/angular-ui/ui-router')
  })

  it('should display Sample1', function (done) {
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'Sample2')
    })
    browser.getCurrentUrl().then((url) => {
      assert.equal(url, `${root}sample1`)
      done()
    })
  })

  it('should change to Sample2', function (done) {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'Sample1')
    })
    browser.getCurrentUrl().then((url) => {
      const aboutUrl = `${root}sample2`
      assert.equal(url, aboutUrl)
      done()
    })
  })
})
