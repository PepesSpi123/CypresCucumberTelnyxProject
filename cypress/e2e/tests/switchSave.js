const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../pages/main.page";

const mainPage = new MainPage()

let total_1 = ''
let total_2 = ''
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
  mainPage.clickMakeCallsElement()
  mainPage.makeCallsAmount().then(($span)=> {
    total_1 = $span.text(); 
  })
})

When("I press the right arrow button", () => {
  mainPage.triggerMakeCallsSlider()
  mainPage.makeCallsAmount().then(($span)=> {
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
    mainPage.totalPriceTelnyx().then(($span)=> {
    total_2 = $span.text(); 
  })
})

When("I drag 'Make outbound calls'", () => {
  mainPage.dragMakeCallsSlider()
  
  mainPage.calculateTotalPriceTelnyx()
  cy.get('@finalPriceTelnyx').then((value) => {
    totalPriceTelnyx = value
  })
  mainPage.calculateTotalPriceTwilio()
  cy.get('@finalPriceTwilio').then((value) => {
    totalPriceTwilio = value
  })
})


Then("the amount of calls should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 

Then("the total price should be changed", () => {
  expect(total_1).not.to.eq(total_2)
}) 

Then("the saved up money should be equal to the difference between the two services", () => {
  mainPage.saveUp().invoke('text').should('include', totalPriceTwilio - totalPriceTelnyx)
}) 


