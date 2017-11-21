import * as assert from 'assert'
import 'mocha'
import { browser, by, element } from 'protractor'

describe('angular-ui-router', function () {
  const root = 'http://localhost:8080/fw/angular-ui/ui-router/#!/'
  const linkButton: any = element(by.css('div[ui-view] ul li a'))
  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:8080/fw/angular-ui/ui-router')
  })

  it('should display Sample1', function (done) {
    linkButton.getText().then((txt: string) => {
      assert(txt === 'Sample2')
    })
    browser.getCurrentUrl().then((url: string) => {
      assert(url === `${root}sample1`)
      done()
    })
  })

  it('should change to Sample2', function (done) {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then((txt: string) => {
      assert(txt === 'Sample1')
    })
    browser.getCurrentUrl().then((url: string) => {
      const aboutUrl = `${root}sample2`
      assert(url === aboutUrl)
      done()
    })
  })
})
