/// <reference types="Cypress" />

class loginPage
{

visit(){
        cy.visit('https://www.saucedemo.com/')
    }

enterUsername(username){
    const filed  = cy.get('#user-name')
    filed.clear()
    filed.type(username)
    return this

    }

enterPassword(userpassword){
        const filed  = cy.get('#password')
        filed.clear()
        filed.type(userpassword)
        return this
    
    }

loginButton(){
    const button = cy.get('#login-button')
    button.click()
} 

}
export default loginPage