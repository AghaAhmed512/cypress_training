const neatCSV = require('neat-csv');

export class LoginPage {

    LocatorForEnterEmail:string = 'input[type="text"]';
    LocatorForEnterPassword:string = 'input[type="password"]';
    LocatorForLoginButton:string =' button[type="submit"]';
      
navigateToUrl(url: string){
        cy.visit(url);
}

readCSVData() {
    return cy.fixture('users.csv')
    .then(neatCSV)
    .then(data => {
    return data;
    });
}

enterEmail(email:string){
        cy.get(this.LocatorForEnterEmail).type(email);
}

enterPassword(password:string){
        cy.get(this.LocatorForEnterPassword).type(password);
}

clickLoginButton(){
        cy.get(this.LocatorForLoginButton).click();
}

LoginSuccess(){
        cy.url().should('include', 'home/');
    }

LoginError(){
        cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
}
}