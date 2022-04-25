describe('Favorites', () => {
  it('As a user, from a generation page, I should be able to click the favorite button on the pokemon card', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen1Pokemon.json'
    }).as('matchedUrl')
    cy.visit('http://localhost:3000/Gen1')
    .get('button[class="add-favorite"]')
    .first()
    .click()
  })

  it('As a user, after I\'ve clicked the favorite button I should be able to click the Favorite Pokemon button in the nav to see my favorited Pokemon', () => {
    cy.get('button[class="favorites-button"]')
      .click()
      .url().should('eq', 'http://localhost:3000/Favorites')
  })

  it('As a user, viewing the Favorite Pokemon page, I should see my favorited Pokemon card(s)', () => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/*', {
      statusCode: 200,
      fixture: 'gen1Pokemon.json'
    }).as('matchedUrl')
    cy.get('div[class="card"]')
    .should('contain', 'Bulbasaur')
    .should('contain', 'Pokedex #: 1')
    .should('contain', 'Bulbasaur Info Link')
    .should('be.visible')
    })

    it('As a user, I should see a button to unfavorite a saved Pokemon', () => {
        cy.get('button[class="remove-favorite"]')
        .should('contain', 'Unfavorite')
    })

    it('As a user, I should be able to click the unfavorite button', () => {
        cy.get('button[class="remove-favorite"]')
        .click()
        .get('h2')
        .should('contain', 'Add Some of Your Favorite Pokemon!')
    })
})
