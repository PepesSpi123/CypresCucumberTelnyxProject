const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";


Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click 'Create a free trial account'", () => {
  mainPage.scrollToSwitchSave()
  cy.reload()
  mainPage.scrollToSwitchSave()
  mainPage.clickCreateAccountBtn()

});

Then("I should be switched to the sign up page", () => {
  cy.url().should('include', '/sign-up')
}) 