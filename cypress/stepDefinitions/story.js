const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

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