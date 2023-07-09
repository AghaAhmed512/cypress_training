/// <reference types="cypress" />

// // ***********************************************
// // This example commands.ts shows you how to
// // create various custom commands and overwrite
// // existing commands.
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
// //       login(email: string, password: string): Chainable<void>
// //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
// //     }
// //   }
// // }



// import { LoginPage } from "../e2e/pages/loginPage";

// declare global {
//     namespace Cypress {
//       interface Chainable {
//         /**
//          * Logs in with a given user
//          * @param email email of the user you want to log in
//          * @param password user passwird
//          * @example
//          * cy.login('filip@example.com', 'i<3slovakia!')
//          *
//          */
//         login: typeof login

//         /**
//         * Set shared state in localStorage
//         * @param key key for the shared state
//         * @param value value to be stored in shared state
//         */
//         //setSharedState:typeof setSharedState

//         /**
//        * Get shared state from localStorage
//        * @param key key for the shared state
//        * @returns value of the shared state
//        */
//         //getSharedState: typeof getSharedState
//       }
//     }
//   }
  
// const login = (email: string, password: string) => {
// const loginPage = new LoginPage();

// cy.session("login",()=>{
// const loginUrl = Cypress.config().baseUrl + '/login';    
  
// loginPage.navigateToUrl(loginUrl)
//   cy.wait(6000);
//   loginPage.enterEmail(email);
//   loginPage.enterPassword(password);
//   loginPage.clickLoginButton();
//   cy.wait(15000);
// });
  
// };

// // const setSharedState = (key: string, value:any)=>{
// //     cy.window().then((win)=>{
// //         win.localStorage.setItem(key,JSON.stringify(value));
// //     });
// // };


// // const getSharedState = (key:string)=>{
// //     cy.window().then((win)=>{
// //         const value = win.localStorage.getItem(key);
// //         return value ? JSON.parse(value):null;
// //     });
// // };

// Cypress.Commands.addAll({login})  
// // Cypress.Commands.addAll({ login,setSharedState,getSharedState })

// ////////////////////////////////////////

// // //
// // declare global{
// //     namespace Cypress{
// //         interface Chainable{
    
// //     saveLocalStorage: () => void;
// //     restoreLocalStorage: () => void;
// //     saveUrl: () => void;
// //     restoreUrl: () => void;

// //         }
// //     }
// // }
// // let LOCAL_STORAGE_MEMORY: { [key: string]: string } = {};
// // let URL_MEMORY: string = '';

// // const saveLocalStorage = () => {
// //     Cypress.Commands.add('saveLocalStorage', () => {
// //       Object.keys(localStorage).forEach((key) => {
// //         LOCAL_STORAGE_MEMORY[key] = localStorage[key];
// //       });
// //     });
// //   };
  
// //   // Restore the local storage state
// //   const restoreLocalStorage = () => {
// //     Cypress.Commands.add('restoreLocalStorage', () => {
// //       Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
// //         localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
// //       });
// //     });
// //   };
  
// //   // Save the current URL
// //   const saveUrl = () => {
// //     Cypress.Commands.add('saveUrl', () => {
// //       cy.url().then((url) => {
// //         URL_MEMORY = url;
// //       });
// //     });
// //   };
  
// //   // Restore the saved URL
// //   const restoreUrl = () => {
// //     Cypress.Commands.add('restoreUrl', () => {
// //       cy.visit(URL_MEMORY);
// //     });
// //   };
  
// //   // Invoke the custom commands
// //   saveLocalStorage();
// //   restoreLocalStorage();
// //   saveUrl();
// //   restoreUrl();

////////////////////////////////////////////////
import { LoginPage } from "../e2e/pages/loginPage";
// create custom command with session
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): void;
    }
  }
}

//const login = (email: string, password: string) => {
Cypress.Commands.add("login",(email:string,password:string)=>{

  cy.session("login",()=>{
  const loginPage = new LoginPage();
  const loginUrl = Cypress.config().baseUrl + '/login';
  
  loginPage.navigateToUrl(loginUrl);
  cy.wait(6000)
  loginPage.typingEmail(email);
  loginPage.typingPassword(password);
  loginPage.clickLoginButton();
  cy.wait(5000);
  
  
});    
});
