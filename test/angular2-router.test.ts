import * as assert from 'power-assert'

describe.skip('angular2-router', function () {
  const selector = 'ul[ui-view] li a'
  beforeEach(function () {
    browser.url('http://localhost:8080/fw/angular2/router')
  })

  it('should display Top', function () {
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'About')
  })

  it('should change to About', function () {
    browser.click(selector)
    // pause 100 milliseconds for fail.
    browser.pause(100)
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'Top')
  })
})
