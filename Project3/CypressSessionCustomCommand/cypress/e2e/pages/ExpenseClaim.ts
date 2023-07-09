export class ExpenseClaim{
locatorForExpenseClaimTab:string = 'nav > div:nth-child(n)';

ClickToDashboardTab(){
    cy.get(this.locatorForExpenseClaimTab).contains('Expense Claims').click()
    cy.get(this.locatorForExpenseClaimTab).contains('Dashboard').click()
}

ClickToReviewExpensesTab(){

    cy.get(this.locatorForExpenseClaimTab).contains('Expense Claims').click()
    cy.get(this.locatorForExpenseClaimTab).contains('Review Expenses').click()
}

ClickToExpenseReport(){
    cy.get(this.locatorForExpenseClaimTab).contains('Expense Claims').click()
    cy.get(this.locatorForExpenseClaimTab).contains('Expenses Report').click()
}
}