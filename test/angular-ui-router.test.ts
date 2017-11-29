describe('angular-ui router', function () {
  const linkQuery: string = 'div[ui-view] ul li a'
  const root = 'http://localhost:8080/fw/angular-ui/ui-router/'

  it('should display Top', (client: any) => {
    client
      .url(root)
      .waitForElementVisible(linkQuery, 1000)
      .assert.containsText(linkQuery, 'Sample2')
      .end()
  })

  it('should change to Sample2', (client: any) => {
    client
      .url(root)
      .waitForElementVisible(linkQuery, 1000)
      .click(linkQuery)
      .pause(500)
      .assert.containsText(linkQuery, 'Sample1')
      .end()
  })
})
