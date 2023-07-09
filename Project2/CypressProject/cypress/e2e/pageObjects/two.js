const neatCSV = require('neat-csv');

export class LoginPage {
    login_locator_enterEmail = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_enterPassword = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_loginButton = '[align="right"] > .MuiButtonBase-root > .MuiButton-label'
       

    visit() {
        cy.visit('https://automation-workstream.arbisoft.com/login/');
    }

    readCSVData() {
        return cy.fixture('users.csv')
            .then(neatCSV)
            .then(data => {
                return data;
            });
    }

    enterEmail(email){
        cy.get(this.login_locator_enterEmail).type(email)
    }

    enterPassword(password){
        cy.get(this.login_locator_enterPassword).type(password)
    }

    clickLoginButton(){
        cy.get(this.login_locator_loginButton).click()
    }

    LoginSuccess(){
        cy.url().should('eq', 'https://automation-workstream.arbisoft.com/home/')
    }
    LoginError(){
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist')
    }
   

}

