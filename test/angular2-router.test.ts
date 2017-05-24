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

  it('should display Top', (done) => {
    browser
      .executeScript(getUrl)
      .then((url) => {
        assert.equal(url, `${baseUrl}default=1`)
        done()
      })
  })

  it('should change to About', (done) => {
    linkButton.click()
    browser.sleep(100)
    browser
      .executeScript(getUrl)
      .then((url) => {
        assert.equal(url, `${baseUrl}about=1`)
        done()
      })
  })
})
