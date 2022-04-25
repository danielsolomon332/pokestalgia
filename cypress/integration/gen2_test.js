describe('Gen2', () => {
  it('As a user, from the main page, I should be able to click the Gen 2 button and route to the Gen 2 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen2Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-2-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen2')
  })

  it('As a user, viewing the Gen2 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen2Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Chikorita')
    .should('contain', 'Pokedex #: 152')
    .should('contain', 'Chikorita Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
