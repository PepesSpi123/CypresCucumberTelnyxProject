const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../pages/main.page";

const mainPage = new MainPage()
Given ("I visit telnyx.com", () => {
  mainPage.goToMain()
  mainPage.acceptCookies()
});

When("I scroll down to the Customer stories", () => {
    mainPage.scrollToCustomerStory()
  })
;

When("I click 'Read customer story'", () => {
  mainPage.clickCustomerStoryBtn()
})
;

Then("I shld be switched to the page with customer story", () => {
    cy.url().should('include', '/customer-stories')
}) 