export class  WorkstreamLoginPage {
    login_locator_enterEmail:string = ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_enterPassword:string = ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
    login_locator_loginButton:string = '[align="right"] > .MuiButtonBase-root > .MuiButton-label'
       


navigateToUrl(url: string){
        cy.visit(url);
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
   

}

