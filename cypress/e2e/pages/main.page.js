class MainPage {



    elements ={

        acceptCookiesBtn :() => cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1'),
        menuBtn : () => cy.get('.sc-14c941d7-8'),
        productsList : () => cy.get('.sc-6ef4e600-19 > :nth-child(1) > .sc-6ef4e600-12'),
        allProductBtn : () => cy.get(':nth-child(9) > .sc-f97529d6-0 > .sc-6ef4e600-12'),
        exploreProductsBtn : () => cy.get('.sc-3e56386e-10 > .sc-5d3a275a-0 > .sc-5d3a275a-1'),
        footerAllProducts : () => cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span'),
        customerStoryBtn : () => cy.get('[href="https://telnyx.com/customer-stories/lightspeed"]'),
        switchSave : () => cy.get('.sc-1e626587-2 > .mchNoDecorate > span', {timeout: 5000}),
        smsBtn : () => cy.get('.hANPHj'),
        tollFreeRadioBtn : () => cy.get('#toll-free-numbers'),
        sendMessagesSlider : () => cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle'),
        makeCallsSlider :() => cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle'),
        makeCallsAmount : () => cy.get('.sc-1a5981e5-3'),
        receiveMessageSlider :() => cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle'),
        totalPriceTelnyx :() => cy.get('.sc-1a5981e5-12'),
        totalPriceTwilio : () => cy.get('.sc-1a5981e5-13'),
        saveUp : () => cy.get('.sc-1a5981e5-15'),
        customersComments : () => cy.get('.sc-9cd1e3e2-3'),
        arrowBtn : () => cy.get('[aria-label="Next Item"]'),
        learnMoreApiBtn : () => cy.get('.sc-5d3a275a-24'),
        loginBtn : () => cy.get('.sc-ee0ec023-2 > :nth-child(6)'),
        signUpBtn : () => cy.get('.sc-14c941d7-5.sc-14c941d7-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1'),
        createAccountBtn : () => cy.get('.sc-1a5981e5-16 > .sc-5d3a275a-0 > .sc-5d3a275a-1'),
        footerSignUpBtn : () => cy.get('[data-e2e="Footer--navItem-mission_control"] > div > .sc-7b6c9f9b-6 > :nth-child(1) > .sc-f97529d6-0 > .sc-6c41f57a-0'),
        twitterBtn : () => cy.get('[href="https://twitter.com/telnyx"]')
    }

    acceptCookies() {
        this.elements.acceptCookiesBtn().click()
    }

    clickMenuBtn() {
        this.elements.menuBtn().click()
    }
    clickProductList() {
        this.elements.productsList().click()
    }
    clickAllProductMenu(){
        this.elements.allProductBtn().click()
    }
    clickExploreProducts() {
        this.elements.exploreProductsBtn().click()
    }
    clickFooterAllProducts() {
        this.elements.footerAllProducts().scrollIntoView().click()
    }
    clickCustomerStoryBtn() {
        this.elements.customerStoryBtn().scrollIntoView().click()
    }
    scrollToSwitchSave(){
        this.elements.switchSave().scrollIntoView()
       
    }
    clickSmsBtn () {
        this.elements.smsBtn().click()
    }
    chooseTollFree() {
        this.elements.tollFreeRadioBtn().click().should('be.checked')
    }
    triggerSendMessageSlider() {
          this.elements.sendMessagesSlider().click()
          this.elements.sendMessagesSlider().type(
            "{rightarrow}{rightarrow}".repeat(15))
    }
    clickMakeCallsElement() {
        this.elements.sendMessagesSlider().click().should('be.focused')
    }
    triggerMakeCallsSlider() {
        this.elements.sendMessagesSlider().type(
          "{rightarrow}{rightarrow}".repeat(15))
    }
    scrollToCustomersComments() {
        this.elements.customersComments().scrollIntoView().should('be.visible')
    }
    checkingCommentIndex() {
        this.elements.customersComments().then(($comments) => {
        
            if ($comments.attr('style').includes('--active-index:1')) {
                this.elements.arrowBtn().click()
            }
        })
        this.elements.customersComments().should('attr', 'style', '--active-index:0;--translation-amount:0px')
    }
    clickArrowBtn(){
        this.elements.arrowBtn().click()
    }
    checkingNextCommentIndex() {
        this.elements.customersComments().should('attr', 'style', '--active-index:1; --translation-amount:0px;')
    }
    scrollToLearnMoreBtn(){
        this.elements.learnMoreApiBtn().scrollIntoView().should('be.visible')
    }
    clickLearnMoreBtn(){
        this.elements.learnMoreApiBtn().click()
    }
    clickLoginBtn() {
        this.elements.loginBtn().click()
        cy.url().should('include', '/login')
    }
    clickSignUpBtn() {
        this.elements.signUpBtn().click()
        cy.url().should('include', '/sign-up')
    }
    clickCreateAccountBtn() {
        this.elements.createAccountBtn().click()
    }
    clickFooterSignUp(){
        this.elements.footerSignUpBtn().scrollIntoView().click()
    }
    clickTwitterBtn(){
        this.elements.twitterBtn().should($twitterBtn => {
            $twitterBtn.attr('target', '_self')
          }).click()
    }
}
module.exports = new MainPage ()