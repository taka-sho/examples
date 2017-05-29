import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

describe('riot-route', function () {
  const baseUrl = 'http://localhost:8080/fw/riot/route'
  const linkButton: any = element(by.css('sample a'))
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
    assertUrls(`${baseUrl}/#sample1`, done)
  })

  it('should change to About', (done) => {
    linkButton.click()
    browser.sleep(100)
    assertUrls(`${baseUrl}/#sample2`, done)
  })
})
