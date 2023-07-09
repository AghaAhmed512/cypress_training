/// <reference types="Cypress" />
import { LoginPage } from "./pages/updatedcsv";
// Define the interface for CSV data
interface CSVData {
    email: string;
    password: string;
    valid: string;
  }
//Define the test suite  
describe('Read CSV', () => {
let users: CSVData[];// Declare the users array
const loginPage = new LoginPage();//Create an instance of LoginPage class

//Execute actions before the test runs  
  before(() => {
// Read the CSV file and parse the data    
  cy.readFile('users.csv').then((csvData) => {
  const rows = csvData.split('\n');// Split the CSV data into rows
  users = rows.map((row: string) => {
  const [email, password, valid] = row.split(','); // Split each row into email, password, and valid fields
  return { email, password, valid };// Create an object representing a user and add it to the users array
  });
  });
// Read the URL from the testData.json fixture file and navigate to it    
  cy.fixture('testData.json').then((data) => {
  loginPage.navigateToUrl(data.url);//// Call the navigateToUrl() method of LoginPage class
  });
  });
  
  // Define the test case
  it('Fill input field using CSV data', () => {
  // Iterate over each user in the users array
  users.forEach((user) => {
  const { email, password, valid } = user;// Destructure the user object to get email, password, and valid fields

    loginPage.typingEmail(email); //Call the typingEmail() methods of LoginPage class
    loginPage.typingPassword(password); //Call the typingPassword() methods of LoginPage class
    loginPage.clickLoginButton(); //Call the clickLoginButton() methods of LoginPage class

  // Check the validity and call the assertLogin() and clearFields() methods accordingly  
      if (valid === 'true') {
      loginPage.assertLogin(true);
      } else {
      loginPage.assertLogin(false);
      loginPage.clearFields();
      }

      });
    });
  });