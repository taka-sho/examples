/// <reference path="../typings/index.d.ts" />

import * as assert from 'power-assert';

describe('examples test', function () {
  beforeEach(function () {
    browser.url('https://uncovertruth.github.io/examples/t/simple.html');
  })

  it('select a value',function(){
    const index = 1;
    const selector = 'select';
    browser.selectByIndex(selector,index);

    const val = browser.getValue(selector);
    assert.equal(val,'example2');
  })
})
