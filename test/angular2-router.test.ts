import * as assert from 'assert'
import 'mocha'
import { browser, by, element } from 'protractor'

describe('angular2-router', function () {
  const linkButton: any = element(by.css('app a'))
  const root = 'http://localhost:8080/fw/angular/router'

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(root)
  })

  it('should display Sample1', done => {
    linkButton.getText().then((txt: string) => {
      assert(txt === 'Sample2')
    })
    browser.getCurrentUrl().then(url => {
      assert(url === `${root}/#/sample1`)
      done()
    })
  })

  it('should change to Sample2', done => {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then((txt: string) => {
      assert(txt === 'Sample1')
    })
    browser.getCurrentUrl().then((url: string) => {
      assert(url === `${root}/#/sample2`)
      done()
    })
  })
})
