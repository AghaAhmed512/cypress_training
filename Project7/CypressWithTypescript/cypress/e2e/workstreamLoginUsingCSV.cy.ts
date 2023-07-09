/// <reference types="Cypress" />

import { WorkstreamLoginPage } from "../pages/loginPageCSV";
interface CSVData{
    email: string;
    password: string;
    valid: string;
}


describe('Read CSV', () => {
     let table: CSVData[];
    //let table:any;
    //let table: { email: string, password: string,valid:boolean}[];
    const loginPage = new WorkstreamLoginPage();

    before(() => {
        loginPage.readCSVData().then((data) => {
            table = data as CSVData[];
        });
       
    });

    it('Fill input field using CSV data', () => {
    loginPage.visit();

        const randomRow = Math.floor(Math.random() * table.length);
        const username = table[randomRow]['email'];
        const password = table[randomRow]['password'];
        //const isValid = table[randomRow]['valid'];

        loginPage.enterEmail(username)
        loginPage.enterPassword(password)
        loginPage.clickLoginButton()

        // if (username && password === 'true') {
        //     loginPage.LoginSuccess();
        // } else {
        //     loginPage.LoginError();
        // }

const isValid = table[randomRow].valid;

cy.log(typeof isValid);



if (isValid === "true") {
    loginPage.LoginSuccess();
} else {
    loginPage.LoginError();
}

    });
});
