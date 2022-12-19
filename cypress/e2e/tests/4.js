const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click 'Read customer story'", () => {
  mainPage.clickCustomerStoryBtn()
});

Then("I shld be switched to the page with customer story", () => {
  cy.url().should('include', '/customer-stories')
}) 