describe('Gen8', () => {
  it('As a user, from the main page, I should be able to click the Gen 8 button and route to the Gen 8 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen8Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-8-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen8')
  })

  it('As a user, viewing the Gen8 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen8Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Grookey')
    .should('contain', 'Pokedex #: 810')
    .should('contain', 'Grookey Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
