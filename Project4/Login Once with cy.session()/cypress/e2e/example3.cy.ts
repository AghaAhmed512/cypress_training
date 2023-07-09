/// <reference types="Cypress" />
let loggedIn = false;

Cypress.Commands.add('login', (username:string, password:string)=>{
    cy.wrap([username,password]).as('credentials');

    cy.visit('/login');
    cy.get('input[name="email"]').wait(2000).type(username);
    cy.get('input[name="password"]').wait(2000).type(password);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    loggedIn = true; // set the loggedIn flag to true
});


describe('My Test',()=>{
before(()=>{
    cy.login('howdy453@gmail.com','VQ7QSU2mau');
    loggedIn = true;
});

// beforeEach(()=>{
// if(!loggedIn){
//     cy.login('howdy453@gmail.com','VQ7QSU2mau');
//     loggedIn = true;
// };
// });

it('should navigate to home page after login',()=>{
    cy.visit('/');    
    cy.url().should('include','home/');
});

it('should navigate to other pages after clicking on links',()=>{
    cy.visit('/home');
    cy.wait(4000);
    cy.get('.jss142102 sidebar-column jss142103 jss142122 sidebar-nav');
});

});