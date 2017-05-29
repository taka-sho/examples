import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

const getUrl = `return UDTracker.Config.getOverrideUrl();`

describe('angular2-router', function () {
  const linkButton: any = element(by.css('app a'))
  const baseUrl = 'http://uncovertruth.github.io/examples/t/virtualurl.html?'

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:8080/fw/angular2/router')
  })

  function assertUrls (testUrl, done) {
    browser
    .executeScript(getUrl)
    .then((url) => {
      assert.equal(url, testUrl)
      done()
    })
  }

  it('should display Top', (done) => {
    assertUrls(`${baseUrl}default=1`, done)
  })

  it('should change to About', (done) => {
    linkButton.click()
    browser.sleep(100)
    assertUrls(`${baseUrl}about=1`, done)
  })
})
