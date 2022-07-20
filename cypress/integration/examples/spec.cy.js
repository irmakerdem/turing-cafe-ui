describe('Turing Cafe Reservations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .contains('Turing Cafe Reservations')
  });

  it('Should display a log of reservations on page load', () => {
    cy.get('form').should('be.visible')
    cy.get('button').should('be.visible')
    cy.get('.resy-container > :nth-child(1) > :nth-child(1)').contains('Christie')
    cy.get(':nth-child(1) > :nth-child(1) > button').should('be.visible')
  });

  it('Should be able to update form based on user input', () => {
    // Write a test that checks that when data is put into the form, the value is reflected in that form input.
    
  });

  it('Should be able to display new reservation on page', () => {
    // Write a test to check the user flow of adding a new reservation to the page.
    
  });

})
