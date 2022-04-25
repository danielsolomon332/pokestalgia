describe('Main', () => {
  it('As a user, on page load I should see a welcome message', () => {
    cy.visit('http://localhost:3000/')
    .get('div[class="welcome-message"]')
    .contains('Welcome to Pokestalgia!')
    .get('div[class="welcome-message"]')
    .contains('The App created for older fans to relive their Pokestalgia and learn about new Pocket Monsters too!')
    .get('div[class="welcome-message"]')
    .contains('This App is also a place for newer fans to rediscover the older Pokemon generations!')
  })

  it('As a user, on page load I should see an image of all generations starting pokemon', () => {
    cy.visit('http://localhost:3000/')
    .get('img[class="pokemon-starters"]')
    .should('have.attr', 'alt', 'pokemon starters')
  })
})
