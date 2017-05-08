import * as assert from 'assert'

const getUrl = `return UDTracker.Config.getOverrideUrl();`

describe('vue-router', function () {
  it('should display Top', () => {
    browser.url('http://localhost:8080/fw/vuejs/vue-router')
    browser.pause(5000)
    assert.equal(browser.execute(getUrl).value, 'http://uncovertruth.github.io/examples/t/virtualurl.html?default=1')
  })

  it('should change to About', () => {
    browser.click('a#about')
    browser.pause(5000)
    assert.equal(browser.execute(getUrl).value, 'http://uncovertruth.github.io/examples/t/virtualurl.html?about=1')
  })
})