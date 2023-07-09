export class TeamReviewPage{
locatorForTeamReviewsTab:string = 'nav > div:nth-child(n)';
// locatorForTeamReviewsDashboardTab:string = '.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(1) > .MuiListItemText-root';
// locatorForReviewProgressAdvisoryTab:string = '.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(2) > .MuiListItemText-root';
// locatorForProjectArchitectureAdvisoryTab:string = '.MuiCollapse-wrapperInner > .MuiList-root > :nth-child(3) > .MuiListItemText-root';


ClickToTeamReviewsDashboardTab(){
cy.get(this.locatorForTeamReviewsTab).contains('Team Review').click();
cy.get(this.locatorForTeamReviewsTab).contains('Dashboard').click();
}

ClickToReviewProgressAdvisoryTab(){
    cy.get(this.locatorForTeamReviewsTab).contains('Team Review').click();
    cy.get(this.locatorForTeamReviewsTab).contains('Review Progress Advisory').click();
}
ClickToProjectArchitectureAdvisoryTab(){
    cy.get(this.locatorForTeamReviewsTab).contains('Team Review').click();
    cy.get(this.locatorForTeamReviewsTab).contains('Project Architecture Advisory').click();
}

}