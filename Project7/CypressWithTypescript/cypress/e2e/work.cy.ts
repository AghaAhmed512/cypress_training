/// <reference types="Cypress" />

import { WorkstreamLoginPage } from "../pages/work_login"

describe('Test for Workstream',()=>{
const myloginpage = new WorkstreamLoginPage();    
const email = Cypress.env("email");
const password = Cypress.env("password");  
    
beforeEach(()=>{
  cy.fixture('testData.json').then((data)=>{
  myloginpage.navigateToUrl(data.url);
  })
 
});

it('Login',()=>{

myloginpage.enterEmail(email);
myloginpage.enterPassword(password);
myloginpage.clickLoginButton();
cy.url().should('include','/home')


});

});