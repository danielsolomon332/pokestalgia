describe('Gen5', () => {
  it('As a user, from the main page, I should be able to click the Gen 5 button and route to the Gen 5 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen5Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-5-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen5')
  })

  it('As a user, viewing the Gen5 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen5Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Victini')
    .should('contain', 'Pokedex #: 494')
    .should('contain', 'Victini Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
