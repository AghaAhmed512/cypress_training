export class  LoginPage {
    LocatorForEnterEmail:string = 'input[type="text"]';
    LocatorForEnterPassword:string = 'input[type="password"]';
    LocatorForLoginButton:string =' button[type="submit"]';

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
   

}

