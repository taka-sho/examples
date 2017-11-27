import * as assert from 'assert'
import 'mocha'
import { browser, by, element } from 'protractor'

describe('react-router', function () {
  const linkButton: any = element(by.css('#content ul li a'))
  const root = 'http://localhost:8080/fw/ReactTraining/react-router'

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get(root)
  })

  it('should display Top', done => {
    linkButton.getText().then((txt: string) => {
      assert(txt === 'sample2')
    })
    browser.getCurrentUrl().then((url: string) => {
      assert(url === `${root}/#/sample1`)
      done()
    })
  })

  it('should change to About', done => {
    linkButton.click()
    browser.sleep(100)
    linkButton.getText().then((txt: string) => {
      assert(txt, 'Sample1')
    })
    browser.getCurrentUrl().then((url: string) => {
      assert(url === `${root}/#/sample2`)
      done()
    })
  })
})
