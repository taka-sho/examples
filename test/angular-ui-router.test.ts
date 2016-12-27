import * as assert from 'power-assert'

describe('angular-ui-router', function () {
  const selector = 'div[ui-view] div ul li a'
  beforeEach(function () {
    browser.url('http://uncovertruth.github.io/examples/fw/angular-ui/ui-router/')
  })

  it('should display Top', function () {
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'Top')
  })

  it('should change to About', function () {
    browser.click(selector)
    // pause 100 milliseconds for fail.
    browser.pause(100)
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'About')
  })
})
