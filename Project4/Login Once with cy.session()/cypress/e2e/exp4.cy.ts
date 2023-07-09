/// <reference types="Cypress" />
describe('My Cypress test suite', () => {
    before(() => {
        Cypress.Commands.add('login', (username:string, password:string)=>{
                // cy.session([username,password],()=>{
                // });
                cy.visit('/login');
                cy.get('input[name="email"]').wait(2000).clear().type(username);
                cy.get('input[name="password"]').wait(2000).clear().type(password);
                cy.get('button[type="submit"]').click();
                cy.wait(2000);    
            });
      // Login once at the beginning of the test suite
    //   cy.visit('/login')
    //   cy.get('input[name="email"]').wait(2000).type('howdy453@gmail.com');
    //   cy.get('input[name="password"]').wait(2000).type('VQ7QSU2mau');
    //   cy.get('button[type="submit"]').click();
    //   cy.url().should('not.contain', 'login')
    });
    beforeEach(() => {
        // Navigate back to the home page before each test
        //cy.visit('/login')
        cy.login('howdy453@gmail.com','VQ7QSU2mau')
      })
  
    it('Test 1', () => {
      // Test code for Test 1
      cy.visit('/login')
      // Here, you should be on the home page already
    })
  
    it('Test 2', () => {
      // Test code for Test 2
      cy.visit('/home')
      // Here, you should still be on the home page
    })
  
    it('Test 3', () => {
      // Test code for Test 3
      // Here, you should still be on the home page
    })
  })
  