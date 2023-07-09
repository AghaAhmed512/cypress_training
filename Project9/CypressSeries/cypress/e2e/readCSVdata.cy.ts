/// <reference types="Cypress" />
import { CSVLoginPage } from "./pages/CSVloginPage";
const loginPage = new CSVLoginPage();

interface CSVData{
    email: string;
    password: string;
    valid: string;
}

describe('Read CSV', () => {
let users: CSVData[];


before(() => {
cy.readFile('users.csv').then((csvData) => {
    const rows = csvData.split('\n');
    cy.log(rows);
    
    users = rows.map((row:string) => {
    const [email, password, valid] = row.split(',');
    return { email, password, valid };
    });
  });

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
