export class ProjectLog{
    locatorForProjectLogTab: string = 'nav > div:nth-child(n)';
    
    clickToProjectLog(){
        cy.get(this.locatorForProjectLogTab).contains('Project Logs').click();
        cy.get(this.locatorForProjectLogTab).contains('My Logs').click();
       
    }
    
}
    