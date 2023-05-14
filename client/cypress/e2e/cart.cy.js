/// <reference types="Cypress" />

describe("adding products to cart", () => {
  it("in home page", () => {
    cy.visit("http://localhost:3000");

    cy.get(
      ":nth-child(1) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click();

    cy.get(
      ":nth-child(2) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click();

    cy.get(
      ".ProductsSection_indicators__0g0kg > .BtnRight_BtnRight__x9pCQ"
    ).click();

    cy.get(
      ":nth-child(3) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click();

    cy.get(".NavigationBar_quantityProductsInBasket__UCI0e").contains("3");
  });

  it("in products page", () => {
    cy.visit("http://localhost:3000/products");
    cy.get(
      ":nth-child(1) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click();

    cy.get(
      ":nth-child(9) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click();

    cy.get(".Pagination_paginationBttns__yHUy5 > :nth-child(3) > a").click({
      force: true,
    });

    cy.get(
      ":nth-child(2) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(2)"
    ).click({ force: true });

    cy.get(".NavigationBar_quantityProductsInBasket__UCI0e").contains("3");
  });

  it.only("in products details", () => {
    cy.visit("http://localhost:3000/products");
    cy.get(
      ":nth-child(1) > .LatestProduct_iconsSection__qbt3\\+ > :nth-child(1)"
    ).click();

    cy.get(
      ".ProductDetalis_productQuantity__oLOyA > div > :nth-child(3)"
    ).click();

    cy.get(".BtnAddCart_btnAddCart__OQi3u").click();

    cy.get(".NavigationBar_quantityProductsInBasket__UCI0e").contains("2");
  });
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}