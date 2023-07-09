/// <reference types="Cypress" />
describe('Login Test',()=>{
    it('Fill input field using CSV data',()=>{
        cy.visit('https://automation-workstream.arbisoft.com/login/')

        const username = '1howdy453@gmail.com';
        const password = 'VQ7QSU2mau';
        //const rondomRow = Math.floor(Math.random() * table.length)
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(username)

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(password)

        cy.get('[align="right"] > .MuiButtonBase-root > .MuiButton-label').click()

       //const username = table[rondomRow]['email']
       //const password = table[rondomRow]['password']
       //const user = table[rondomRow];
        
        if (username === 'howdy453@gmail.com' && password === 'VQ7QSU2mau') {
            cy.wait(6000)
            cy.url().should('eq', 'https://automation-workstream.arbisoft.com/home/')
           
          }
            else {
            cy.wait(6000)
            cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist')
          }


    });
})