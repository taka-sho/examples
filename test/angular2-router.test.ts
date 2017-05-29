import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

const getUrl = `return UDTracker.Config.getOverrideUrl();`

describe('angular2-router', function () {
  const linkButton: any = element(by.css('app a'))

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:8080/fw/angular2/router')
  })

  it('should display Sample1', (done) => {
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'Sample2')
      done()
    })
  })

  it('should change to Sample2', (done) => {
    linkButton
    .click()
    .getText()
    .then((txt) => {
      assert.equal(txt, 'Sample1')
      done()
    })
  })
})
