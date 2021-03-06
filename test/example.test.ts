import * as assert from 'assert'
import 'mocha'
import { browser, by, element } from 'protractor'

describe('examples test', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:8080/t/simple.html')
  })

  it('set input form elements', function (done) {
    const email: string = 'userdive@example.com'
    const el: any = element(by.css('.form-group:first-of-type .form-controll'))

    for (const str of email.split('')) {
      el.sendKeys(str)
    }
    el.getAttribute('value').then((val: string) => {
      assert(val === email)
      done()
    })
  })

  it('select a value', function () {
    element.all(by.tagName('select option')).then(items => {
      items[1].click()
      const dropDown: any = element(by.css('select'))
      dropDown.getAttribute('value').then((val: string) => {
        assert(val === 'example2')
      })
    })
  })
})
