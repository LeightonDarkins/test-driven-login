describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should login', () => {
    cy.get('#username')
      .type('ChuckNorris')

    cy.get('#password')
      .type('chuckIsTheGreatest247')

    cy.get('#login-button')
      .click()

    cy.get('#logout-button')
      .should('be.visible')
  })
})