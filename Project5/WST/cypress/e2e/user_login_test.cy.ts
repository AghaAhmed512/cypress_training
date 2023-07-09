// <reference types="Cypress" />
import { LoginPage } from "./pages/loginPage";

describe('Login Test',()=>{
const loginPage = new LoginPage();

let email:string;
let password:string;
let username:string;

before(()=>{
   
cy.readFile('cypress.env.json').then((envData)=>{
    email = envData.email;
    password = envData.password;
    username = envData.username;


    const loginUrl = Cypress.config().baseUrl + '/login';
    loginPage.navigateToUrl(loginUrl);
    });
});

it('Should login and validate the user',()=>{

loginPage.typingEmail(email);
loginPage.typingPassword(password);
loginPage.clickLoginButton();
cy.wait(4000);
loginPage.validateUsername(username);
    
});
});    