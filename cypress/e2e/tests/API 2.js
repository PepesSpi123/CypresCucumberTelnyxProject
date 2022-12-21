const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I scroll down to the API section", () => {
  mainPage.scrollToLearnMoreBtn()
})

When("I click the button 'Lear more' in API section", () => {
  mainPage.clickLearnMoreBtn()
});

Then("I should be switched to the page with API documentation", () => {
  cy.url().should('include', '/docs')
}) 
