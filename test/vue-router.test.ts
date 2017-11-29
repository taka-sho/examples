describe('vue-router', function () {
  const linkQuery: string = '#app li a'
  const root = 'http://localhost:8080/fw/vuejs/vue-router'

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
