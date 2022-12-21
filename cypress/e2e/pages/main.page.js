export default class MainPage {

    constructor () {

        this.acceptCookiesBtn = () => {return cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')},
        this.menuBtn = () => {return cy.get('.sc-14c941d7-8')},
        this.productsList = () => {return cy.get('.sc-6ef4e600-19 > :nth-child(1) > .sc-6ef4e600-12')},
        this.allProductBtn = () => {return cy.get(':nth-child(9) > .sc-f97529d6-0 > .sc-6ef4e600-12')},
        this.exploreProductsBtn = () => {return cy.get('.sc-3e56386e-10 > .sc-5d3a275a-0 > .sc-5d3a275a-1')},
        this.footerAllProducts = () => {return cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span')},
        this.customerStoryBtn = () => {return cy.get('[href="https://telnyx.com/customer-stories/lightspeed"]')},
        this.switchSave = () => {return cy.get('.sc-1e626587-2 > .mchNoDecorate > span', {timeout: 5000})},
        this.smsBtn = () => {return cy.get('.hANPHj')},
        this.tollFreeRadioBtn = () => {return cy.get('#toll-free-numbers')},
        this.sendMessagesSlider = () => {return cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle')},
        this.makeCallsSlider = () => {return cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle')},
        this.makeCallsAmount = () => {return cy.get('.sc-1a5981e5-3')},
        this.receiveMessageSlider = () => {return cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle')},
        this.totalPriceTelnyx = () => {return cy.get('.sc-1a5981e5-12')},
        this.totalPriceTwilio = () => {return cy.get('.sc-1a5981e5-13')},
        this.saveUp = () => {return cy.get('.sc-1a5981e5-15')},
        this.customersComments = () => {return cy.get('.sc-9cd1e3e2-3')},
        this.arrowBtn = () => {return cy.get('[aria-label="Next Item"]')},
        this.learnMoreApiBtn = () => {return cy.get('.sc-5d3a275a-24')},
        this.loginBtn = () => {return cy.get('.sc-ee0ec023-2 > :nth-child(6)')},
        this.signUpBtn = () => {return cy.get('.sc-14c941d7-5.sc-14c941d7-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1')},
        this.createAccountBtn = () => {return cy.get('.sc-1a5981e5-16 > .sc-5d3a275a-0 > .sc-5d3a275a-1')},
        this.footerSignUpBtn = () => {return cy.get('[data-e2e="Footer--navItem-mission_control"] > div > .sc-7b6c9f9b-6 > :nth-child(1) > .sc-f97529d6-0 > .sc-6c41f57a-0')},
        this.twitterBtn = () => {return cy.get('[href="https://twitter.com/telnyx"]')},
        this.footer = () => {return cy.get('.sc-7b6c9f9b-3')}
    

    }
    

    acceptCookies() {
        this.acceptCookiesBtn().click()
    }

    clickMenuBtn() {
        this.menuBtn().click()
    }
    clickProductList() {
        this.productsList().click()
    }
    clickAllProductMenu(){
        this.allProductBtn().click()
    }
    scrollToProducts() {
        this.exploreProductsBtn().scrollIntoView()
    }
    clickExploreProducts() {
        this.exploreProductsBtn().click()
    }
    clickFooterAllProducts() {
        this.footerAllProducts().scrollIntoView().click()
    }
    scrollToCustomerStory() {
        this.customerStoryBtn().scrollIntoView().should('be.visible')
    }
    clickCustomerStoryBtn() {
        this.customerStoryBtn().click()
    }
    scrollToSwitchSave(){
        this.switchSave().scrollIntoView()
        cy.reload()
        this.switchSave().scrollIntoView()
    }
    clickSmsBtn () {
        this.smsBtn().click()
    }
    chooseTollFree() {
        this.tollFreeRadioBtn().click().should('be.checked')
    }
    dragSendMessageSlider() {
          this.sendMessagesSlider().click()
          this.sendMessagesSlider().type(
            "{rightarrow}{rightarrow}".repeat(15))
    }
    clickMakeCallsElement() {
        this.sendMessagesSlider().click().should('be.focused')
    }
    triggerMakeCallsSlider() {
        this.sendMessagesSlider().type(
          "{rightarrow}{rightarrow}".repeat(15))
    }
    dragMakeCallsSlider() {
        this.clickMakeCallsElement()
        this.triggerMakeCallsSlider()
    }
    scrollToCustomersComments() {
        this.customersComments().scrollIntoView().should('be.visible')
    }
    checkingCommentIndex() {
        this.customersComments().then(($comments) => {
        
            if ($comments.attr('style').includes('--active-index:1')) {
                this.arrowBtn().click()
            }
        })
        this.customersComments().should('attr', 'style', '--active-index:0;--translation-amount:0px')
    }
    clickArrowBtn(){
        this.arrowBtn().click()
    }
    checkingNextCommentIndex() {
        this.customersComments().should('attr', 'style', '--active-index:1; --translation-amount:0px;')
    }
    scrollToLearnMoreBtn(){
        this.learnMoreApiBtn().scrollIntoView().should('be.visible')
    }
    clickLearnMoreBtn(){
        this.learnMoreApiBtn().click()
    }
    clickLoginBtn() {
        this.loginBtn().click()
        cy.url().should('include', '/login')
    }
    clickSignUpBtn() {
        this.signUpBtn().click()
        cy.url().should('include', '/sign-up')
    }
    clickCreateAccountBtn() {
        this.createAccountBtn().click()
    }
    clickFooterSignUp(){
        this.footerSignUpBtn().scrollIntoView().click()
    }
    clickTwitterBtn(){
        this.twitterBtn().should($twitterBtn => {
            $twitterBtn.attr('target', '_self')
          }).click()
    }
    scrollToFooter() {
        this.footer().scrollIntoView().should('be.visible')
    }
    getTotalTelnyxSpan(){

    }
    calculateTotalPriceTelnyx(){
        
        this.totalPriceTelnyx().then(($span)=> {
            let totalTelnyx = ''
            totalTelnyx = $span.text()
            totalTelnyx = totalTelnyx.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
            const totalPriceTelnyx = parseInt(totalTelnyx)
            cy.wrap(totalPriceTelnyx).as('priceTelnyx')
        })
            cy.get('@priceTelnyx').then((value) => {
                cy.wrap(value).as('finalPriceTelnyx')
            }
        )

    }
    calculateTotalPriceTwilio(){
        
        this.totalPriceTwilio().then(($span)=> {
            let totalTwilio = ''
            totalTwilio = $span.text()
            totalTwilio = totalTwilio.trim().replace('$', '').replace(' ', ''). replace(',', ''); 
            const totalPriceTwilio = parseInt(totalTwilio)
            cy.wrap(totalPriceTwilio).as('priceTwilio')
        })
        cy.get('@priceTwilio').then((value) => {
            cy.wrap(value).as('finalPriceTwilio')
        })
    }
}
