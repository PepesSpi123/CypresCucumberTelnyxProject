const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";


Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click 'Follow on Twitter'", () => {
  mainPage.clickTwitterBtn()
});
Then("I should be switched to the Twitter", () => {
  cy.url().should('include', 'twitter')
}) 