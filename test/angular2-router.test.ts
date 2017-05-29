import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

const getUrl = `return UDTracker.Config.getOverrideUrl();`

describe('angular2-router', function () {
  const linkButton: any = element(by.css('app a'))
  const baseUrl = 'http://localhost:8080/fw/angular2/router/#/'

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

  it.only('should display Sample1', (done) => {
    assertUrls(`${baseUrl}sample1`, done)
  })

  it.only('should change to Sample2', (done) => {
    linkButton.click()
    browser.sleep(100)
    assertUrls(`${baseUrl}sample2`, done)
  })
})
