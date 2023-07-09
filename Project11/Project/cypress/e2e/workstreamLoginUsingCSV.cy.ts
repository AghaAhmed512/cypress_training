/// <reference types="Cypress" />

import { WorkstreamLoginPage } from "./pages/login_page_CSV"; 

describe('Read CSV', () => {
    let table:any;
    const loginPage = new WorkstreamLoginPage();

    before(() => {
        loginPage.readCSVData().then(data => {
            table = data;
        });
    });

    it('Fill input field using CSV data', () => {
        loginPage.visit();

        const randomRow = Math.floor(Math.random() * table.length);
        const username = table[randomRow]['email'];
        const password = table[randomRow]['password'];

        loginPage.enterEmail(username)
        loginPage.enterPassword(password)
        loginPage.clickLoginButton()

    });
});
