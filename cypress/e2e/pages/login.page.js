class LoginPage {

    elements ={

        signUpBtn : () => cy.get('[href="https://telnyx.com/sign-up?referrer=https://telnyx.com/"]')
    }
    clickSignUpBtn() {
        this.elements.signUpBtn().should($signUpBtn => {
            $signUpBtn.attr('target', '_self')
          }).click()
    }
}
module.exports = new LoginPage ()