const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});
When("I scroll down to the customers' comments", () => {
  mainPage.scrollToCustomersComments()
})
When("I switch customers' comments", () => {
  mainPage.checkingCommentIndex()
})

When("I use the arrow button", () => {
    mainPage.clickArrowBtn()
  })
;
When("I wait for a 10 seconds", () => {
  cy.wait(1000)
})
;

Then("I should see the anoter one customers' comment", () => {
    mainPage.checkingNextCommentIndex()
}) 
Then("customers' comments should be  switched automatically", () => {
  mainPage.checkingNextCommentIndex()
}) 