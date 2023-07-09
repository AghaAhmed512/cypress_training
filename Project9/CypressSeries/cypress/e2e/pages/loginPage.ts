export class LoginPage {

    LocatorForEnterEmail:string = 'input[name="username"]';
    LocatorForEnterPassword:string = 'input[name="password"]';
    LocatorForLoginButton:string =  'button[type="submit"]';
    

navigateToUrl(url: string){
        cy.visit(url);
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

// LoginSuccess(){
//         cy.url().should('include', 'home/');
//     }

// LoginError(){
//         cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist');
// }

}
