// /// <reference types="Cypress" />
// import { LoginPage } from "./pages/loginPage"; 
// import { ProjectLog } from "./pages/projectLog";
// import { UserTab } from "./pages/userTab";



// const loginPage = new LoginPage();
// const projectLog = new ProjectLog();
// const userTab = new UserTab();

// describe('Validate Workstream functionality', () => {
// beforeEach(()=>{
//     const email = Cypress.env('email');
//     const password = Cypress.env('password');
//     cy.login(email, password);
    
// });

// it('Should Navigate to Home page', () => {
// loginPage.navigateToUrl('home/');
// cy.wait(8000);
// cy.url().should('include',"/home" );
// cy.wait(5000);
// });

// it('Project Logs',()=>{

// loginPage.navigateToUrl('home/');
// cy.wait(8000);
// projectLog.clickToProjectLog();
// cy.wait(8000);
// cy.url().should('include',"/project-logs/");
// cy.wait(5000);
// });

// it('UserTab', () => {

// cy.wait(5000);
// loginPage.navigateToUrl('/project-logs/');
//     userTab.clickToUserTab()
//     cy.wait(3000);
//     userTab.clickToProfileButton();
//     cy.wait(3000);
//     cy.scrollTo('bottom');
//     cy.wait(3000)
//     userTab.clickToProfileEditButtion();
//     cy.wait(3000);
//     cy.scrollTo('top');
//     cy.wait(3000);
//     userTab.TypeContactName('ahmed');
//     userTab.clickToContactRelation();
//     userTab.assert();
//     // userTab.clickToUserTab();
//     // userTab.clickToChangePasswordButton();
//     // userTab.clickToCancel()
//     // cy.wait(3000);
//     // userTab.clickToUserTab();
//     // userTab.clickToLogoutButton();
    
//   });

// });
