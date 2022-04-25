describe('Gen1', () => {
  it('As a user, from the main page, I should be able to click the Gen 1 button and route to the Gen 1 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen1Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-1-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen1')
  })

  it('As a user, viewing the Gen1 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen1Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Bulbasaur')
    .should('contain', 'Pokedex #: 1')
    .should('contain', 'Bulbasaur Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
