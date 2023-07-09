/// <reference types="Cypress" />
import { myLoginPage } from "./pages/myLoginpage";
const loginPage = new myLoginPage();
describe('Validate Workstream functionality', () => {
beforeEach(()=>{
   cy.login('howdy453@gmail.com','VQ7QSU2mau');
    // cy.session("login",()=>{
    //     //cy.visit('https://automation-workstream.arbisoft.com/login/');
    //     loginPage.navigateToUrl('https://automation-workstream.arbisoft.com/login/');
    //     loginPage.enterEmail('howdy453@gmail.com');
    //     loginPage.enterPassword('VQ7QSU2mau');
    //     loginPage.clickLoginButton();
    //     cy.wait(5000);

    // });
});

  
it('Should Navigate to Home page', () => {
cy.visit('https://automation-workstream.arbisoft.com/home/')
cy.wait(5000);
cy.url().should('include',"/home" )
});

it('Project Logs',()=>{
cy.visit('https://automation-workstream.arbisoft.com/home/')
cy.wait(5000);
cy.get('nav.jss59 nav.jss61 div.MuiButtonBase-root:nth-child(2)').click()
cy.get('nav.jss59 nav.MuiList-root.jss61 div.MuiCollapse-root').click()
cy.wait(5000);
cy.url().should('include',"/project-logs/")
});
});
