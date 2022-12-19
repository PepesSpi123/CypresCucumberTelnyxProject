const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";


Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click 'Sign Up' on the footer", () => {
  mainPage.clickFooterSignUp()
});
Then("I should be switched to the sign up page", () => {
  cy.url().should('include', '/sign-up')
}) 