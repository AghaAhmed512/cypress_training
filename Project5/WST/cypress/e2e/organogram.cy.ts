// <reference types="Cypress" />
import { OrganogramPage } from "./pages/organogramPage";
describe('Organogram',()=>{
const organogramPage = new OrganogramPage();
    before(()=>{
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        cy.login(email,password);
    })
    it('Should navigate to the organogram',()=>{
    organogramPage.navigateToUrl('organogram/?tabIndex=0');
    organogramPage.assertPageTitle();
    organogramPage.clickOnDropdownButton();
    organogramPage.clickOnWorkstreamTeamOption();
    organogramPage.clickToFullStack();
    cy.wait(3000);
    organogramPage.clickToQA();
    cy.wait(3000);
    organogramPage.clickToERP_HR();
    cy.wait(3000);
    organogramPage.GoToHomeButton()
});
});