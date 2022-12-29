const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../pages/main.page";

const mainPage = new MainPage()

Given ("I visit telnyx.com", () => {
  mainPage.goToMain()
  mainPage.acceptCookies()
});

When("I scroll down to the footer", () => {
  mainPage.scrollToFooter()
});

When("I click 'Follow on Twitter'", () => {
  mainPage.clickTwitterBtn()
});

Then("I should be switched to the Twitter", () => {
  cy.url().should('include', 'twitter')
}) 