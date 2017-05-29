import * as assert from 'assert'
import { browser, element, by } from 'protractor'

describe('react-router', function () {
  const linkButton: any = element(by.css('#content ul li a'))
  const baseUrl = 'http://localhost:8080/fw/reactjs/react-router'
  const getUrl = `return UDTracker.Config.getOverrideUrl();`

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(baseUrl)
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
    assertUrls(`${baseUrl}/#/sample1`, done)
  })

  it('should change to About', (done) => {
    linkButton.click()
    browser.sleep(100)
    assertUrls(`${baseUrl}/#/sample2`, done)
  })
})
