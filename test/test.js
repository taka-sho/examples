var assert = require('power-assert');

describe('webdriver.io page', function() {
  beforeEach(function () {
    browser.url('https://uncovertruth.github.io/examples/t/simple.html')
  })

  it('Set something', function () {
    browser.addValue('.form-group:first-of-type .form-controll','asd@honya.jp');
    var value = browser.getValue('.form-group:first-of-type .form-controll');
    assert(value === 'asd@honya.jp');
  })
})
