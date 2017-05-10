import * as assert from 'assert'
import { browser } from 'protractor'

const getUrl = `return UDTracker.Config.getOverrideUrl();`

describe('react-router', function () {
  let currentUrl: string = ''
  it('should display Top', () => {
    browser.get('http://localhost:8080/fw/reactjs/react-router')
    browser.pause(5000)
    browser
      .executeScript(getUrl)
      .then((val: string) => {
        currentUrl = val
      })
    assert.equal(currentUrl, 'http://uncovertruth.github.io/examples/t/virtualurl.html?default=1')
  })

  it('should change to About', () => {
    browser
      .actions()
      .click('a#about')
    browser.pause(5000)
    browser
      .executeScript(getUrl)
      .then((val: string) => {
        currentUrl = val
      })
    assert.equal(currentUrl, 'http://uncovertruth.github.io/examples/t/virtualurl.html?about=1')
  })
})
