export class FormsPage{
locatorForFormsTab:string = 'nav > div:nth-child(n)';

ClickToDashboardTab(){
cy.get(this.locatorForFormsTab).contains('Forms').click();
cy.get(this.locatorForFormsTab).contains('Dashboard').click();
}

ClickToReviewLoanTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Loan').click();   
}

ClickToReviewAdvanceSalaryTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Advance Salary').click();
}

ClickToReviewVehicleTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Vehicle').click();
}

ClickToReviewSocialImpactTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Social Impact').click();
}

ClickToReviewISMSIncidentTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review ISMS Incident').click();
}

ClickToReviewTransitionsTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Transition').click();
}

ClickToReviewSocietySignUpTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Review Society Signup').click();
}

ClickToPODclearanceTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('POD Clearance').click();
}

ClickToITclearanceTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('IT Clearance').click();
}

ClickToTLclearanceTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('TL Clearance').click();
}

ClickToAdminClearanceTab(){
    cy.get(this.locatorForFormsTab).contains('Forms').click();
    cy.get(this.locatorForFormsTab).contains('Admin Clearance').click();
}

}

