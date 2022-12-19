const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";
let total_1 = ''
let total_2 = ''
Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I use slider", () => {
  mainPage.scrollToSwitchSave()
  cy.reload()
  mainPage.scrollToSwitchSave()
  mainPage.elements.makeCallsAmount().then(($span)=> {
    total_1 = $span.text(); 
})
  mainPage.clickMakeCallsElement()
  mainPage.triggerMakeCallsSlider()
  mainPage.elements.makeCallsAmount().then(($span)=> {
    total_2 = $span.text(); 
  })

});

Then("the amount of calls should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 