import * as assert from 'power-assert'
import { browser, element, by } from 'protractor'

describe('riot-route', function () {
  const selector = 'top a'
  const root = 'http://localhost:8080/fw/riot/route/'
  const linkButton: any = element(by.tagName(selector))
  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(root)
  })

  it('should display Top', function (done) {
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'about')
    })
    browser.getCurrentUrl().then((url) => {
      assert.equal(url, root)
      done()
    })
  })
  it('should change to About', function (done) {
    element(by.partialLinkText('about')).click()
    browser.sleep(100)
    const aboutUrl = `${root}#about`
    linkButton.getText().then((txt) => {
      assert.equal(txt, 'top')
    })
    browser.getCurrentUrl().then((url) => {
      assert.equal(url, aboutUrl)
      done()
    })
  })
})
