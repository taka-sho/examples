import * as assert from 'assert'

describe('react-router', function () {
  const selector = 'div[ui-view] div ul li a'
  beforeEach(function () {
    browser.url('http://localhost:8080/fw/reactjs/react-router')
  })

  it('should display Top', done => {
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'Top')
    done()
  })

  it('should change to About', done => {
    browser.click(selector)
    // pause 100 milliseconds for fail.
    browser.pause(1000)
    const element: any = browser.element(selector)
    assert.equal(element.getText(), 'About')
    done()
  })
})
