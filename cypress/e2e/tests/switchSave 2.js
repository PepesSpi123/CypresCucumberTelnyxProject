const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import mainPage from "../pages/main.page";
let total_1 = ''
let total_2 = ''
let totalTelnyx = ''
let totalTwilio = ''
let totalPriceTelnyx = 0
let totalPriceTwilio = 0

Given ("I visit telnyx.com", () => {
  cy.visit("https://telnyx.com/");
  mainPage.acceptCookies()
});

When("I scroll down to the 'Switch + Save with Telnyx'", () => {
  mainPage.scrollToSwitchSave()
})

When("I click the 'Make outbound calls' slider element", () => {
  mainPage.elements.makeCallsAmount().then(($span)=> {
    total_1 = $span.text(); 
  })
})

When("I press the right arrow button", () => {
  mainPage.clickMakeCallsElement()
  mainPage.triggerMakeCallsSlider()
  mainPage.elements.makeCallsAmount().then(($span)=> {
    total_2 = $span.text(); 
  })
});

When("I click 'SMS' button", () => {
  mainPage.clickSmsBtn()
})

When("I choose 'Toll-free numbers' radio button", () => {
  mainPage.chooseTollFree()
})

When("I drag 'Send message'", () => {
    mainPage.dragSendMessageSlider()
    mainPage.elements.totalPriceTelnyx().then(($span)=> {
    total_2 = $span.text(); 
  })
})

When("I drag 'Make outbound calls'", () => {
  mainPage.dragMakeCallsSlider()
  mainPage.elements.totalPriceTelnyx().then(($span)=> {
    totalTelnyx = $span.text()
    totalTelnyx = totalTelnyx.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
    totalPriceTelnyx = totalTelnyx
  })
    mainPage.elements.totalPriceTwilio().then(($span)=> {
    totalTwilio = $span.text()
    totalTwilio = totalTwilio.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
    totalPriceTwilio = totalTwilio
  })
})

When("I click 'Create a free trial account'", () => {
  mainPage.clickCreateAccountBtn()
});

Then("the amount of calls should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 

Then("the total price should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 

Then("the saved up money should be equal to the difference between the two services", () => {
  mainPage.elements.saveUp().invoke('text').should('include', totalPriceTwilio-totalPriceTelnyx)
}) 

Then("I should be switched to the sign up page", () => {
  cy.url().should('include', '/sign-up')
}) 