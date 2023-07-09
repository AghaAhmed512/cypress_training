// <reference types="Cypress" />
import { JobRequisition } from "./pages/jobRequisition";


describe('Job Requisition',()=>{
const jobRequisition = new JobRequisition();    
    beforeEach(()=>{
        const email = Cypress.env('email');
        const password = Cypress.env('password');
        cy.login(email,password);
    });
 it('should land on Job Requisition requests dashboard successfully',()=>{
jobRequisition.navigateToUrl('pod/job-requisitions/');
// Verify that the user lands on the Job Requisition requests dashboard
cy.url().should('include', '/job-requisition');

//should open the filter menu successfully
jobRequisition.clickOnFilterButton();

//should display all components in the filter menu
jobRequisition.assertTeamDropdown();
jobRequisition.assertRoleDropdown();
jobRequisition.assertRecruiterDropdown();
jobRequisition.assertExperienceDropdown();
jobRequisition.assertNatureOfRequirementDropdown();
jobRequisition.assertTypeDropdown();
jobRequisition.assertStatusDropdown();
jobRequisition.assertReplacementOrNewOpeningDropdown();
jobRequisition.assertTechStackDropdown();
jobRequisition.assertResetButton();
jobRequisition.assertApplyButton();




//Teck Stack
jobRequisition.clickOnTechStackDropdown();
cy.get('form > .MuiGrid-container > :nth-child(9)').click();

// ReplacementOfNewOpening
jobRequisition.clickOnReplacementOfNewOpeningDropdown();
cy.get('form > .MuiGrid-container > :nth-child(8)').click();

//Status
jobRequisition.clickOnStatusDropdown();
cy.get('form > .MuiGrid-container > :nth-child(7)').click();

//type
jobRequisition.clickOnTypeDropdown();
cy.get('form > .MuiGrid-container > :nth-child(6)').click();

//nature of requirement
jobRequisition.clickOnNatureOfRequirementDropdown();
cy.get('form > .MuiGrid-container > :nth-child(5)').click();

//Experience
jobRequisition.clickOnExperienceDropdown();
cy.get('form > .MuiGrid-container > :nth-child(4)').click()


//role
jobRequisition.clickOnRoleDropdown()
cy.get('form > .MuiGrid-container > :nth-child(2)').click();

//team
jobRequisition.clickOnTeamDropdown();
cy.get('form > .MuiGrid-container > :nth-child(1)').click();



});

});