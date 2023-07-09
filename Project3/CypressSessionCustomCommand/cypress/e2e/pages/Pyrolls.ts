export class PayrollPage {
locatorForPayrollTab:string = 'nav > div:nth-child(n)';

ClickToDashboardTab(){
    cy.get(this.locatorForPayrollTab).contains('Payroll').click();
    cy.get(this.locatorForPayrollTab).contains('Dashboard').click();
}

ClickToSubContractorTab(){
    cy.get(this.locatorForPayrollTab).contains('Payroll').click();
    cy.get(this.locatorForPayrollTab).contains('Sub contractor').click();
}
ClickToFinalSettlementTab(){
    cy.get(this.locatorForPayrollTab).contains('Payroll').click();
    cy.get(this.locatorForPayrollTab).contains('Final Settlement').click();
}

ClickToTaxCertificateTab(){
    cy.get(this.locatorForPayrollTab).contains('Payroll').click();
    cy.get(this.locatorForPayrollTab).contains('Tax Certificate').click();
}

ClickToPeopleReportTab(){
    cy.get(this.locatorForPayrollTab).contains('Payroll').click();
    cy.get(this.locatorForPayrollTab).contains('People Report').click();
}

}