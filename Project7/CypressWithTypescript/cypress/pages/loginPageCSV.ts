const neatCSV = require('neat-csv');

export class  WorkstreamLoginPage {
    login_locator_enterEmail:string = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_enterPassword:string = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_loginButton:string = '[align="right"] > .MuiButtonBase-root > .MuiButton-label'
       

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
        cy.get(this.login_locator_enterEmail).type(email);
    }

    enterPassword(password:string){
        cy.get(this.login_locator_enterPassword).type(password);
    }

    clickLoginButton(){
        cy.get(this.login_locator_loginButton).click();
    }

    LoginSuccess(){
        cy.url().should('include', 'home/');
    }
    LoginError(){
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
    }
   

}

