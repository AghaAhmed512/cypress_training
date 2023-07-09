const neatCSV = require('neat-csv');

export class  WorkstreamLoginPage {
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

    enterEmail(email:string){
        cy.get(this.login_locator_enterEmail).type(email)
    }

    enterPassword(password:string){
        cy.get(this.login_locator_enterPassword).type(password)
    }

    clickLoginButton(){
        cy.get(this.login_locator_loginButton).click()
    }

   

}

