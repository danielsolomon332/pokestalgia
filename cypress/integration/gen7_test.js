describe('Gen7', () => {
  it('As a user, from the main page, I should be able to click the Gen 7 button and route to the Gen 7 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen7Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-7-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen7')
  })

  it('As a user, viewing the Gen7 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen7Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Rowlet')
    .should('contain', 'Pokedex #: 722')
    .should('contain', 'Rowlet Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
