/// <reference types="Cypress" />
import { WorkstreamLoginPage } from "./pages/WorkstreamloginPage";
const loginPage = new WorkstreamLoginPage();
describe('Validate Workstream functionality', () => {
beforeEach(()=>{
    cy.session("login",()=>{
        cy.visit('https://automation-workstream.arbisoft.com/login/');
        loginPage.enterEmail('howdy453@gmail.com');
        loginPage.enterPassword('VQ7QSU2mau');
        loginPage.clickLoginButton();
        cy.wait(5000);

    });
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

it('Training',()=>{
cy.visit('https://automation-workstream.arbisoft.com/project-logs/');
cy.wait(5000);
cy.get(':nth-child(3) > .MuiListItemText-root').click();
cy.wait(5000);
cy.url().should('include',"/training/dashboard/")
});

it('Leave,dasboard',()=>{
    cy.visit('https://automation-workstream.arbisoft.com/training/dashboard/');
    cy.wait(5000);
    cy.get(':nth-child(4) > .MuiListItemText-root').click();
    cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiListItemText-root').click()
    cy.wait(5000);
})

it('Leave,leave summary',()=>{
cy.visit('https://automation-workstream.arbisoft.com/leaves/dashboard/');
cy.wait(5000);
cy.get('.jss76 > .MuiListItemText-root').click();
cy.wait(5000);
cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root').click();
cy.wait(5000);
});

it('Expense Claims, Dasboard',()=>{
cy.visit('https://automation-workstream.arbisoft.com/leaves/calendar/?tab=0&person_id=1904');
cy.wait(5000);
cy.get(':nth-child(5) > .MuiListItemText-root').click();
cy.get('[style="min-height: 0px; height: auto; transition-duration: 254ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiListItemText-root').click();
cy.wait(5000);
});
it('Expense Claims, Review Expenses',()=>{
cy.visit('https://automation-workstream.arbisoft.com/expenses/dashboard/?fromDate=2023-01-01&toDate=2023-12-31&limit=10&page=0');
cy.wait(5000);
cy.get(':nth-child(5) > .MuiListItemText-root').click();
cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root').click();
cy.wait(5000);
});

it('Expense Claims, Expense Report',()=>{
cy.visit('https://automation-workstream.arbisoft.com/expenses/review/');
cy.wait(5000);
cy.get('.jss76 > .MuiListItemText-root').click();
cy.get('.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(3) > .MuiListItemText-root').click();
cy.wait(5000);
});

});
