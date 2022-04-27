/// <reference types="Cypress" />

describe("products page", () => {
  beforeEach(() => {
    cy.pause();
  });

  it("should render products page", () => {
    cy.visit("/");

    cy.get("[data-testid=products]").should("exist");
  });

  xit("should render products page (with alias)", () => {
    cy.visit("/");

    cy.get("[data-testid=products]").as("products");
    cy.get("@products").should("exist");
  });

  it("should render 20 products from api", () => {
    cy.visit("/");

    cy.get("[data-testid=product-card]").should("have.length", 20);
  });

  describe("product card tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should fill favorite icon with click favorite button and restore state with second click", () => {
      cy.get("[data-testid=favorite-box]").first().click();

      // second way: cy.get("[data-testid=empty-heart]").first().parent().trigger("click");
      cy.get("[data-testid=favorite-box] > svg")
        .first()
        .invoke("attr", "data-testid")
        .should("eq", "filled-heart");

      cy.get("[data-testid=favorite-box]").first().click();
      cy.get("[data-testid=favorite-box] > svg")
        .first()
        .invoke("attr", "data-testid")
        .should("eq", "empty-heart");
    });

    xit("should fill favorite icon with click favorite button and restore state with second click (with commands)", () => {
      const productNo = Math.floor(Math.random() * 20);

      cy.clickFavoriteButton(productNo);
      cy.shouldBeFavorite(productNo);

      cy.clickFavoriteButton(productNo);
      cy.shouldNotBeFavorite(productNo);
    });
  });

  describe("search tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("should render filtered product when search term is meaningful", () => {
      cy.doSearch("mens");

      cy.get("[data-testid=product-card]").should("have.length.lt", 20);
      cy.get("[data-testid=product-card]").should("have.length.gt", 0);
    });

    xit("should render filtered product when search term is meaningful (with alias)", () => {
      cy.doSearch("mens");

      cy.get("[data-testid=product-card]")
        .as("productCards")
        .should("have.length.lt", 20);
      cy.get("[data-testid=product-card]").should("have.length.gt", 0);
    });

    it("should not render product when search term is random", () => {
      cy.doSearch("sadasdsadsa");

      cy.contains("No product found").should("exist");
      // cy.get("[data-testid=products]")
      //   .contains("No product found")
      //   .should("exist");
      cy.get("[data-testid=product-card]").should("have.length", 0);
    });
  });
});
