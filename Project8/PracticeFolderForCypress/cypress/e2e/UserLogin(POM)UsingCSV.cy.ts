/// <reference types="Cypress" />
import { LoginPage } from "./pages/loginPageCSV";
const loginPage = new LoginPage();

interface CSVData{
    email: string;
    password: string;
    valid: string;
}
describe('Read CSV', () => {
let users: CSVData[];

before(() => {
loginPage.readCSVData().then((data) => { users = data as CSVData[];});

cy.fixture('testData.json').then((data)=>{loginPage.navigateToUrl(data.url)});       
});

it('Fill input field using CSV data', () => {

    
    const randomRow = Math.floor(Math.random() * users.length);
    
    const username = users[randomRow]['email'];
    const password = users[randomRow]['password'];

    
    loginPage.enterEmail(username)
    loginPage.enterPassword(password)
    
    loginPage.clickLoginButton()

    const isValid = users[randomRow].valid;

    cy.log(typeof isValid);

    
if (isValid === "true") {

    loginPage.LoginSuccess();
} else {

    loginPage.LoginError();
}

    });
});
