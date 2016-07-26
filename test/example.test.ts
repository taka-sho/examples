/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert'

describe('examples test', function () {
  beforeEach(function () {
    browser.url('https://uncovertruth.github.io/examples/t/simple.html')
  })
  it('select a value',function(){

    const selector = 'select'
    const index = 1

    browser
      .selectByIndex(selector, index)
    const val = browser.getValue('select')
    assert.equal(val,'example2')
  })
})
