const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

When("I click 'Follow on Twitter'", () => {
  mainPage.clickTwitterBtn()
});

Then("I should be switched to the Twitter", () => {
  cy.url().should('include', 'twitter')
}) 