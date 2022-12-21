import mainPage from "./main.page"

export default new class SignUpPage extends mainPage{

    constructor() {
        super(),
        this.loginBtn = () => {return cy.get('[href="https://portal.telnyx.com/#"]')}
    }
    clickLoginBtn() {
        this.loginBtn().click()
    }
}
