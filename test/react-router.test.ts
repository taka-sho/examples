import * as assert from 'assert'
import { browser, element, by } from 'protractor'

describe('react-router', function () {
  const linkButton: any = element(by.css('#content ul li a'))
  const root = 'http://localhost:8080/fw/ReactTraining/react-router'
  const getUrl = `return UDTracker.Config.getOverrideUrl();`

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(root)
  })

  it('should display Top', done => {
    linkButton.getText().then(txt => {
      assert.equal(txt, 'Sample2')
    })
    browser.getCurrentUrl().then(url => {
      assert.equal(url, `${root}/#/sample1`)
      done()
    })
  })

  it('should change to About', done => {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then(txt => {
      assert.equal(txt, 'Sample1')
    })
    browser.getCurrentUrl().then(url => {
      assert.equal(url, `${root}/#/sample2`)
      done()
    })
  })
})
