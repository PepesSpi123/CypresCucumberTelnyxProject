class SignUpPage {

    elements ={

        loginBtn : () => cy.get('[href="https://portal.telnyx.com/#"]')
    }
    clickLoginBtn() {
        this.elements.loginBtn().click()
    }
}
module.exports = new SignUpPage ()