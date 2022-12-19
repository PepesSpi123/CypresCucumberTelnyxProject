const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";
let totalTelnyx = ''
let totalTwilio = ''
let totalPriceTelnyx = 0
let totalPriceTwilio = 0
Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I change data in 'Switch+Save' section", () => {
    mainPage.scrollToSwitchSave()
    cy.reload()
    mainPage.scrollToSwitchSave()
    mainPage.clickMakeCallsElement()
    mainPage.triggerMakeCallsSlider()
    mainPage.elements.totalPriceTelnyx().then(($span)=> {
    totalTelnyx = $span.text()
    totalTelnyx = totalTelnyx.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
    totalPriceTelnyx = totalTelnyx})
    mainPage.elements.totalPriceTwilio().then(($span)=> {
    totalTwilio = $span.text()
    totalTwilio = totalTwilio.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
    totalPriceTwilio = totalTwilio})
  })
;

Then("the saved up money should be equal to the difference between the two services", () => {
  mainPage.elements.saveUp().invoke('text').should('include', totalPriceTwilio-totalPriceTelnyx)
}) 