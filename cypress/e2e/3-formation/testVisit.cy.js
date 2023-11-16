/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {

    cy.visit('http://testphp.vulnweb.com/login.php')
    cy.get(':nth-child(1) > :nth-child(2) > input').type("test")
    cy.get(':nth-child(2) > :nth-child(2) > input').type("test")
    cy.get(':nth-child(3) > td > input').click()
    cy.get("[href='logout.php']").should("be.visible")
    cy.get(':nth-child(6) > td > input').should("be.visible").should("have.attr", "name", "update")


  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
  return false
})
