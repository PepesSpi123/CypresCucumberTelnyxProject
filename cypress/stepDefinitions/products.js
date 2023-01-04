const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

When("I click in the menu button", () => {
  mainPage.clickMenuBtn()
})

When("I click button Products", () => {
  mainPage.clickProductList()
})

When("I choose All products in meny", () => {
  mainPage.clickAllProductMenu()
})

When("I scroll down to the products list", () => {
  mainPage.scrollToProducts()
})
When("I choose Explore our products on the main page", () => {
  mainPage.clickExploreProducts()
})
When("I click All products on footer", () => {
  mainPage.clickFooterAllProducts()
})

Then("I should be switched to the products page", () => {
  cy.url().should('include', '/products')
}) 