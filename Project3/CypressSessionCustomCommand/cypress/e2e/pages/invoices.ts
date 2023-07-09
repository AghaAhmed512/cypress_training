export class InvoicesPage{
    locatorForInvoicesTab:string = 'nav > div:nth-child(n)';

ClickToDashboardTab(){
    cy.get(this.locatorForInvoicesTab).contains('Invoices').click();
    cy.get(this.locatorForInvoicesTab).contains('Dashboard').click();
}

ClickToSummaryReportTab(){
    cy.get(this.locatorForInvoicesTab).contains('Invoices').click();
    cy.get(this.locatorForInvoicesTab).contains('Summary Report').click();
}


ClickToContractsTab(){
    cy.get(this.locatorForInvoicesTab).contains('Invoices').click();
    cy.get(this.locatorForInvoicesTab).contains('Contracts').click();
}

}