/// <reference types="Cypress" />

import { LoginPage } from "./pages/loginPageEnv";
//This line imports the LoginPage class from a module located at "./pages/loginPageEnv".
//To interact with the login page elements. 

describe('Test for Workstream',()=>{
//sets up a test suite with the description "Test for Workstream".
// A test suite is a collection of test cases that are grouped together.

const myloginpage = new LoginPage();
//creates a new instance of the LoginPage class and assigns it to the myloginpage constant.
//This instance is used to interact with the elements on the login page.

const email = Cypress.env("email");
//retrieves the value of the environment variable named "email" and assigns it to the email constant. 

const password = Cypress.env("password");  
//retrieves the value of the environment variable named "password" and assigns it to the password constant. 

beforeEach(()=>{
//This is a Cypress beforeEach() hook, which is a test hook that runs before each test in the current test suite.
//It is used to set up common test conditions or actions that need to be performed before each test.  
  
cy.fixture('testData.json').then((data)=>{
//cy.fixture() command to load the contents of the testData.json fixture file.A fixture is a way to externalize
//test data from the test code, allowing to store data in separate files for better organization & maintainability.
//The .then() function is a Promise-based callback that is executed after the fixture data is loaded,
//and it receives the loaded data as an argument.

myloginpage.navigateToUrl(data.url);
//This line calls the navigateToUrl() method of the myloginpage object and passes the url value
//from the loaded fixture data as an argument. The navigateToUrl() method is responsible for navigating
//to the URL specified in the url parameter.
});
});

it('Login',()=>{
//sets up a test case 

myloginpage.enterEmail(email);
//calls the enterEmail() method on the myloginpage instance, which types the email value
//into the email input field on the login page.

myloginpage.enterPassword(password);
//calls the enterPassword() method on the myloginpage instance, which types the password value
//into the password input field on the login page.

myloginpage.clickLoginButton();
//calls the clickLoginButton() method on the myloginpage instance, which clicks the login button on the login page.

cy.url().should('include','/home');
//uses a Cypress assertion to check if the current URL includes '/home', which indicates that the
//login was successful and the user is redirected to the home page. If the assertion fails, the test will fail.


});

});