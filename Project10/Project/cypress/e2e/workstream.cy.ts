/// <reference types="Cypress" />
import { MyLoginPage } from "./pages/login_page_workstream"

const myloginpage = new MyLoginPage()
describe('Test for Workstream',()=>{
    it('Login',()=>{

    myloginpage.navigateToUrl('https://automation-workstream.arbisoft.com/login/')

    myloginpage.enterEmail('howdy453@gmail.com')

    myloginpage.enterPassword('VQ7QSU2mau')

    myloginpage.clickLoginButton()


    })

})