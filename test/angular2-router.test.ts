import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

describe('angular2-router', function () {
  const linkButton: any = element(by.css('app a'))
  const root = 'http://localhost:8080/fw/angular/router'
  const getUrl = `return UDTracker.Config.getOverrideUrl();`

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(root)
  })

  it('should display Sample1', (done) => {
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'Sample2')
    })
    browser.getCurrentUrl().then((url) => {
      assert.equal(url, `${root}/#/sample1`)
      done()
    })
  })

  it('should change to Sample2', (done) => {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'Sample1')
    })
    browser.getCurrentUrl().then((url) => {
      assert.equal(url, `${root}/#/sample2`)
      done()
    })
  })
})
