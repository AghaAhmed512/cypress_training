
export class OrganogramPage{
    organogramTabSelector:string = '.jss136754 > div';
    organogramTextSelector: string = '.MuiTypography-h4';
    dropownSelector:string = '.css-tlfecz-indicatorContainer';
    clickWorksteamSelector:string ='#react-select-2-option-1';
    searchBoxtextSelector:string = '.MuiBreadcrumbs-ol';
    goToHomePageButtonSelector:string = 'button.MuiButtonBase-root';
    menuListSelector:string = ':nth-child(1) .MuiTypography-body1';


navigateToUrl(url: string):void{
        cy.visit(url);
}

clickOnOrganogramTab():void{
    cy.get(this.organogramTabSelector).contains('Organogram').click();
}
assertPageTitle():void{
    cy.url().should('include','organogram/')
    cy.get(this.organogramTextSelector).should('contain','Organogram');
}

clickOnDropdownButton():void{
    cy.get(this.dropownSelector).click();
}
clickOnWorkstreamTeamOption():void{
    cy.get(this.clickWorksteamSelector).click();
    cy.get(this.searchBoxtextSelector).should('have.text','workstream');    
}
clickToFullStack(){
    cy.get(this.menuListSelector).contains("Fullstack").click();
    cy.wait(3000);
    cy.get(this.searchBoxtextSelector).should('have.text','workstream/Fullstack');
}
clickToQA(){
    cy.get(this.menuListSelector).contains("QA").click();
    cy.get(this.searchBoxtextSelector).should('have.text','workstream/QA');
}
clickToERP_HR(){
    cy.get(this.menuListSelector).contains("ERP-HR").click();
    
}

GoToHomeButton(){
    cy.get(this.goToHomePageButtonSelector).contains('Go to Home Page').click();
}

}