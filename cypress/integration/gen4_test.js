describe('Gen4', () => {
  it('As a user, from the main page, I should be able to click the Gen 4 button and route to the Gen 4 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen4Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-4-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen4')
  })

  it('As a user, viewing the Gen4 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen4Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Turtwig')
    .should('contain', 'Pokedex #: 387')
    .should('contain', 'Turtwig Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
