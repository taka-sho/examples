describe('ReactTraining', function () {
  const linkQuery: string = '#content ul li a'
  const root = 'http://localhost:8080/fw/ReactTraining/react-router/'

  it('should display Top', (client: any) => {
    client
      .url(root)
      .waitForElementVisible(linkQuery, 1000)
      .assert.containsText(linkQuery, 'sample2')
      .end()
  })

  it('should change to Sample2', (client: any) => {
    client
      .url(root)
      .waitForElementVisible(linkQuery, 1000)
      .click(linkQuery)
      .pause(500)
      .assert.containsText(linkQuery, 'sample1')
      .end()
  })
})
