export class LoginPage{
loginPage_username = '#uname'
loginPage_userpassword = '#pwd'
loginPage_loginbutton =  '[type="submit"]'  
    
    navigate(url: string){
        cy.visit(url)

    }

    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)

    }

    
    enterPassword(password:string){
        cy.get(this.loginPage_userpassword).type(password)

    }

    clickLoging(){
        cy.get(this.loginPage_loginbutton).click()
    }
}