/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert'

describe('examples test', function () {
  beforeEach(function () {
    browser.url('https://uncovertruth.github.io/examples/t/simple.html')
  })

  it('set input form elements', function () {
    const email = 'userdive@example.com'
    const selector = '.form-group:first-of-type .form-controll'

    for (const str of email.split('') ) {
      browser.addValue(selector, str)
    }
    const value: any = browser.getValue(selector)
    assert(value === email)
  })
})
