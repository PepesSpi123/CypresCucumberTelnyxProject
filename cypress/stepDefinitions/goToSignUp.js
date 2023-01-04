const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import loginPage from '../e2e/pages/login.page'
import MainPage from "../e2e/pages/main.page";

const mainPage = new MainPage()

When("I click the button 'Log In' from the home page", () => {
  mainPage.clickLoginBtn()
});

When("I click the button 'Sign Up'", () => {
  loginPage.clickSignUpBtn()
});

When("I scroll down to the footer", () => {
  mainPage.scrollToFooter()
});

When("I click 'Sign Up' on the footer", () => {
  mainPage.clickFooterSignUp()
});

When("I scroll down to the 'Switch + Save with Telnyx'", () => {
  mainPage.scrollToSwitchSave()
})

When("I click 'Create a free trial account'", () => {
  mainPage.clickCreateAccountBtn()
});

Then("I should be switched to the sign up page", () => {
  cy.url().should('include', '/sign-up')
}) 