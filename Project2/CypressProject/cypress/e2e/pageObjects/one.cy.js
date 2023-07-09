import { LoginPage } from "./two";

describe('Read CSV', () => {
    let table;
    const loginPage = new LoginPage();

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

        if (username === true && password === true) {
            loginPage.LoginSuccess();
        } else {
            loginPage.LoginError();
        }
    });
});
