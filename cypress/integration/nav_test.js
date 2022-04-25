describe('Navigation Bar', () => {
  it('As a user, on page load I should see a title', () => {
    cy.visit('http://localhost:3000/')
      .get('.title')
      .contains('Pokestalgia')
  })

  it('As a user, on page load I should see an image of a pokeball', () => {
    cy.visit('http://localhost:3000/')
      .get('img[class="pokeball"]')
      .should('have.attr', 'alt', 'pokeball')
  })

  it('As a user, I should be able to click the Favorite Pokemon button and be routed to the Favorites page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="favorites-button"]').click()
      .url().should('eq', 'http://localhost:3000/Favorites')
  })

  it('As a user, I should be able to click the Gen 1 button and be routed to the Gen1 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-1-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen1')
  })

  it('As a user, I should be able to click the Gen 2 button and be routed to the Gen2 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-2-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen2')
  })

  it('As a user, I should be able to click the Gen 3 button and be routed to the Gen3 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-3-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen3')
  })

  it('As a user, I should be able to click the Gen 4 button and be routed to the Gen4 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-4-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen4')
  })

  it('As a user, I should be able to click the Gen 5 button and be routed to the Gen5 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-5-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen5')
  })

  it('As a user, I should be able to click the Gen 6 button and be routed to the Gen6 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-6-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen6')
  })

  it('As a user, I should be able to click the Gen 7 button and be routed to the Gen7 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-7-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen7')
  })

  it('As a user, I should be able to click the Gen 8 button and be routed to the Gen8 page', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-8-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen8')
  })

  it('As a user, I should be able to click the a Gen button, route to that page, then click the Pokestalgia title and return home', () => {
    cy.visit('http://localhost:3000/')
      .get('button[class="gen-1-button"]').click()
      .url().should('eq', 'http://localhost:3000/Gen1')
      .get('h1[class="title"]').click()
      .url().should('eq', 'http://localhost:3000/')
  })
})
