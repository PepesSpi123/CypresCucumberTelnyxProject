const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click in the menu button", () => {
  mainPage.clickMenuBtn()
});

When("I click button Products", () => {
  mainPage.clickProductList()
});

When("I choose All products in meny", () => {
  mainPage.clickAllProductMenu()
});

When("I scroll down to the products list", () => {
  mainPage.scrollToProductList()
});

When("I choose Explore our products on the main page", () => {
  mainPage.clickExploreProducts()
});

When("I scroll down to the footer", () => {
  mainPage.scrollToFooter()
});

When("I click All products on footer", () => {
  mainPage.clickFooterAllProducts()
});

Then("I should be switched to the products page", () => {
  cy.url().should('include', '/products')
})  




