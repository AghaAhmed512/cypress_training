/// <reference types="Cypress" />

describe('Login and Home Page Tests',()=>{
it('Login test',()=>{
    cy.visit('https://automation-workstream.arbisoft.com/login/');
    cy.get('input[name="email"]').wait(3000).clear().type('howdy453@gmail.com');
    cy.get('input[name="password"]').wait(3000).clear().type('VQ7QSU2mau');
    cy.get('button[type="submit"]').click();
    cy.wait(5000);

// const userLogin = {username:'howdy453@gmail.com',pssword:'VQ7QSU2mau'};
// cy.wrap(userLogin).as('userLogin');
});

// it('Dashboard',()=>{
// cy.get('@userLogin').then((userLogin)=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// })
// });
});