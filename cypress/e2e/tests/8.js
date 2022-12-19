const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I switch customers coments", () => {
    mainPage.scrollToCustomersComments()
    mainPage.checkingCommentIndex()
    mainPage.clickArrowBtn()
  })
;

Then("I should see the anoter one customers comment", () => {
    mainPage.checkingNextCommentIndex()
}) 