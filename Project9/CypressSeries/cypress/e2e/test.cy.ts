/// <reference types="Cypress" />
import { LoginPage } from "./pages/loginPage";

const loginPage = new LoginPage();

describe('Validate Orange HRM Login functionality', () => {

beforeEach(() => {
cy.session("login",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.enterEmail('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLoginButton();
})

});

it('Admin', () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");    
cy.url().should('include',"/viewSystemUsers" )
cy.get(':nth-child(2) > .oxd-main-menu-item').click()

});

it('PIM',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    cy.url().should('include',"pim/viewEmployeeList" )
    cy.wait(3000)
    cy.get('button[type="button"].oxd-button').click({ force: true });
    cy.wait(3000);
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Agha');
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Muhammad');
    cy.wait(2000)
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ahmed');
    cy.get('button[type="submit"]').click().wait(3000);


});
it('Personal Details',()=>{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/172")
});
});
