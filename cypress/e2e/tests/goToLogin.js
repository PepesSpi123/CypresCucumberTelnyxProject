const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import signUpPage from "../pages/signUp.page";

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  signUpPage.acceptCookies()
});

When("I click the button 'Sign up'", () => {
  signUpPage.clickSignUpBtn()
});

When("I click the button 'Log In'", () => {
  signUpPage.clickLoginBtn()
});

Then("I should be switched to the login page", () => {
  cy.url().should('include', '/login')
}) 

