/// <reference types="Cypress" />
import { LoginPage } from "./pages/loginPage";
const loginPage = new LoginPage();

// Define an interface to represent the structure of the CSV data
interface CSVData{
    email: string;
    password: string;
    valid: string;
}

// Define a test suite titled "Read CSV"
describe('Read CSV', () => {
let users: CSVData[];

 // Define a before hook that performs actions before the test runs
before(() => {
//loginPage.readCSVData().then((data) => { users = data as CSVData[];});
cy.readFile('users.csv').then((csvData) => {
    const rows = csvData.split('\n');
    cy.log(rows);
    //const headerRow = rows.shift();
    users = rows.map((row:string) => {
    const [email, password, valid] = row.split(',');
    return { email, password, valid };
    });
  });
// Read the URL from the testData.json fixture file and navigate to it using the navigateToUrl() method of LoginPage class
cy.fixture('testData.json').then((data)=>{loginPage.navigateToUrl(data.url)});       
});

// Define a test case titled "Fill input field using CSV data"
it('Fill input field using CSV data', () => {

    // Generate a random row number to select a random user from the CSV data
    const randomRow = Math.floor(Math.random() * users.length);
    
    // Extract the email and password from the selected user
    const username = users[randomRow]['email'];
    const password = users[randomRow]['password'];

    // Enter the extracted email and password using the enterEmail() and enterPassword() methods of LoginPage class
    loginPage.enterEmail(username)
    loginPage.enterPassword(password)
    
    // Click the login button using the clickLoginButton() method of LoginPage class
    loginPage.clickLoginButton()

    // Extract the 'valid' field from the selected user
    const isValid = users[randomRow].valid;

    cy.log(typeof isValid);
    // Log the type of 'isValid' variable


 // Check if 'isValid' is equal to "true"    
if (isValid === "true") {
     // If 'isValid' is true, call the LoginSuccess() method of LoginPage class to assert successful login
    loginPage.LoginSuccess();
} else {
    // If 'isValid' is false, call the LoginError() method of LoginPage class to assert login error
    loginPage.LoginError();
}

    });
});
