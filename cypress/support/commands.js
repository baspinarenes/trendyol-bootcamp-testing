Cypress.Commands.add("clickFavoriteButton", (buttonNo) => {
  cy.get("[data-testid=favorite-box]").eq(buttonNo).click();
});

Cypress.Commands.add("doSearch", (searchTerm) => {
  cy.get("[data-testid=search-input]").type(searchTerm);
});

Cypress.Commands.add("shouldBeFavorite", (productNo) => {
  cy.get("[data-testid=favorite-box] > svg")
    .eq(productNo)
    .invoke("attr", "data-testid")
    .should("eq", "filled-heart");
});

Cypress.Commands.add("shouldNotBeFavorite", (productNo) => {
  cy.get("[data-testid=favorite-box] > svg")
    .eq(productNo)
    .invoke("attr", "data-testid")
    .should("eq", "empty-heart");
});
