import { contains } from "cypress/types/jquery";

export class AnalyticsPage{
loctorForAnaLyticsTab:string = 'nav > div:nth-child(n)';

ClickToSummaryTab(){
    cy.get(this.loctorForAnaLyticsTab).contains('Analytics').click();
    cy.get(this.loctorForAnaLyticsTab).contains('Summary').click();
}
// ClickToOtherReportsTab(){
//     cy.get(this.loctorForAnaLyticsTab).contains('Analytics').click();
//     cy.get(this.loctorForAnaLyticsTab).click().contains('Other reports').click();
// }

// ClickToOtherReportsTab(){
//     cy.get(this.loctorForAnaLyticsTab).click().then(()=>{
//     cy.contains('Other reports').click();
//     });
// }

// ClickToOtherReportsTab() {
//     cy.get(this.loctorForAnaLyticsTab)
//       .contains('Analytics')
//       .click()
//       .then(() => {
//         cy.contains('Other reports').click();
//       });
//     }

ClickToOtherReportsTab(){
    cy.get(this.loctorForAnaLyticsTab).click({multiple:true})
    .click()
    .eq(1)
    .then(()=>{
        cy.contains('Other reports').click();
    })
}

}