/// <reference types="Cypress" />
const neatCSV = require('neat-csv');

describe('Read CSV',()=>{
let table;

before(()=>{
    cy
    .fixture('users.csv')// read the csv file
    .then(neatCSV) //convert csv file into object
    .then(data => {table = data})// storing data to variable 'table'
    .then(console.table)

});   
    it('Fill input field using CSV data',()=>{
        cy.visit('https://automation-workstream.arbisoft.com/login/')


        const rondomRow = Math.floor(Math.random() * table.length)
        const username = table[rondomRow]['email'];
        const password = table[rondomRow]['password'];
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(username)

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(password)

        cy.get('[align="right"] > .MuiButtonBase-root > .MuiButton-label').click()

       
       //const user = table[rondomRow];
        
        if (username === true && password === true) {
            cy.wait(6000)
            cy.url().should('eq', 'https://automation-workstream.arbisoft.com/home/')
            
          } 
            else {
            cy.wait(6000)
            cy.get('.Toastify__toast-body').should('contain', 'Error - This user does not exist')
          }


    });
})