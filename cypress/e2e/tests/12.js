const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I wait for a 10 seconds", () => {
    mainPage.scrollToCustomersComments()
    mainPage.checkingCommentIndex()
    cy.wait(1000)
  })
;

Then("customers' comments should be  switched automatically", () => {
    mainPage.checkingNextCommentIndex()
}) 