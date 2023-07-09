/// <reference types="cypress" />
import { LoginPage } from "../e2e/pages/LoginPage";
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// create custom command with session
declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Logs in with a given user
         * @param email email of the user you want to log in
         * @param password user passwird
         * @example
         * cy.login('filip@example.com', 'i<3slovakia!')
         *
         */
        login: typeof login
      }
    }
  }
  
const login = (email: string, password: string) => {
const loginPage = new LoginPage();

cy.session("login",()=>{
const loginUrl = Cypress.config().baseUrl + '/login';    
  
loginPage.navigateToUrl(loginUrl)
  cy.wait(6000);
  loginPage.enterEmail(email);
  loginPage.enterPassword(password);
  loginPage.clickLoginButton();
  cy.wait(15000);
});
  
};
  
Cypress.Commands.addAll({ login })


