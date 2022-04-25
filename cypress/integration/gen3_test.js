describe('Gen3', () => {
  it('As a user, from the main page, I should be able to click the Gen 3 button and route to the Gen 3 page', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen3Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/')
    .get('button[class="gen-3-button"]')
    .click()
    .url().should('eq', 'http://localhost:3000/Gen3')
  })

  it('As a user, viewing the Gen3 page, I should see Pokemon cards for the generation', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen3Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .first()
    .should('contain', 'Treecko')
    .should('contain', 'Pokedex #: 252')
    .should('contain', 'Treecko Info Link')
    .should('contain', 'Favorite')
    .should('be.visible')
  })
})
