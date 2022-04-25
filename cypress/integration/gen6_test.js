describe('Gen6', () => {
  it('As a user, from the main page, I should be able to click the Gen 6 button and route to the Gen 6 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen6Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-6-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen6')
  })

  it('As a user, viewing the Gen6 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen6Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Chespin')
    .should('contain', 'Pokedex #: 650')
    .should('contain', 'Chespin Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
