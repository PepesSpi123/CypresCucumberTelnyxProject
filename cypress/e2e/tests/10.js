const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import loginPage from "../pages/login.page";
import mainPage from "../pages/main.page";


Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I click the button 'Log In'", () => {
  mainPage.clickLoginBtn()
});
When("I click the button 'Sign Up'", () => {
    loginPage.clickSignUpBtn()
  });
Then("I should be switched to the sign up page", () => {
  cy.url().should('include', '/sign-up')
}) 
