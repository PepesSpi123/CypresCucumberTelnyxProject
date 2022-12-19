const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";
let total_1 = ''
let total_2 = ''
Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I change data in 'Switch+Save' section", () => {
  mainPage.scrollToSwitchSave()
  cy.reload()
  mainPage.scrollToSwitchSave()
  mainPage.clickSmsBtn()
  mainPage.chooseTollFree()
  mainPage.elements.totalPriceTelnyx().then(($span)=> {
    total_1 = $span.text(); 
})
  mainPage.clickMakeCallsElement()
  mainPage.triggerSendMessageSlider()
  mainPage.elements.totalPriceTelnyx().then(($span)=> {
    total_2 = $span.text(); 
  })

});

Then("the total price should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 