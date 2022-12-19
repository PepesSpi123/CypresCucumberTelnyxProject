const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";

Given ("I visit telnyx.com", () => { 
    cy.visit("https://telnyx.com/");
    mainPage.acceptCookies()
   
});
  
  When("I choose Explore our products on the main page", () => {
    mainPage.clickExploreProducts()
  });
  
  Then("I should be switched to the products page", () => {
    cy.url().should('include', '/products')
  })