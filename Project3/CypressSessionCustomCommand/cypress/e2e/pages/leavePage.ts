export class LeavePage{
locatorForLeaveTab: string = 'nav > div:nth-child(n)';

ClickToLeaveDashboardTab(){
    cy.get(this.locatorForLeaveTab).contains('Leave').click();
    cy.get(this.locatorForLeaveTab).contains('Dashboard').click()
}


ClickToLeaveSummaryTab(){
    cy.get(this.locatorForLeaveTab).contains('Leave').click();
    cy.get(this.locatorForLeaveTab).contains('Leave Summary').click();
}

}