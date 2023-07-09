export class  LoginPage {
        emailInputSelector:string = 'input[type="text"]';
        passwordInputSelector :string = 'input[type="password"]';
        loginButtonSelector :string =' button[type="submit"]';
        userGreetingSelector:string = '.MuiTypography-h4';

navigateToUrl(url: string):void{
        cy.visit(url);
}

typingEmail(email:string):void{
        cy.get(this.emailInputSelector).type(email);
}

typingPassword(password:string):void{
        cy.get(this.passwordInputSelector).type(password);
}

clickLoginButton():void{
        cy.get(this.loginButtonSelector).click();
}
   
validateUsername(username:string):void{
cy.get(this.userGreetingSelector).should('be.visible');        
cy.get(this.userGreetingSelector).should('contain',username);
}
}