import * as assert from 'power-assert'

describe('riot-route', function () {
  const selector = 'top a'
  const root = 'http://localhost:8080/fw/riot/route/'
  beforeEach(function () {
    browser.url(root)
  })

  it('should display Top', function () {
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'about')
    assert.equal(browser.getUrl(), root)
  })

  it('should change to About', function () {
    browser.click(selector)
    // pause 100 milliseconds for fail.
    browser.pause(100)
    const element: any = browser.element(selector)
    const testUrl = `${root}#about`
    assert.equal(element.getText(), 'top')
    assert.equal(browser.getUrl(), testUrl)
  })
})
