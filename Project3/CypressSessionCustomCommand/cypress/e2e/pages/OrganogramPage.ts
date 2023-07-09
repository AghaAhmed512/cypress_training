export class OrganogramPage{
locatorForOrganogramTab:string = 'nav > div:nth-child(n)';
ClickToOrganogramTab(){
    cy.get(this.locatorForOrganogramTab).contains('Organogram').click()
}
}