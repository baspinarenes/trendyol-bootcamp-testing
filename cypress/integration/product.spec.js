/// <reference types="Cypress" />

describe("product page", () => {
  it("should render product page by click product card", () => {
    cy.visit("/");

    const number = Math.floor(Math.random() * 20);
    cy.get("[data-testid=product-card]").eq(number).click();

    cy.url().should("include", `/product?id=${number + 1}`);
    cy.get("[data-testid=product-page]").should("exist");
  });

  it("should render product page by direct with link", () => {
    cy.visit("/product?id=1");

    cy.get("[data-testid=product-page]").should("exist");
  });

  it("should redirect index page when click logo", () => {
    cy.visit("/product?id=1");

    cy.get("[data-testid=logo]").click();

    cy.url().should("eq", Cypress.config("baseUrl"));
  });
});
