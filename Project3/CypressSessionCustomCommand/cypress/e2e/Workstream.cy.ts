/// <reference types="Cypress" />
import { WorkstreamLoginPage } from "./pages/loginPage";
import { ProjectLog } from "./pages/projectLog";
import { TrainingPage } from "./pages/training";
import { LeavePage } from "./pages/leavePage";
import { ExpenseClaim } from "./pages/ExpenseClaim";
import { OrganogramPage } from "./pages/OrganogramPage";
import { TeamReviewPage } from "./pages/teamReviewsPage";
import { FormsPage } from "./pages/Frorm";
import { InvoicesPage } from "./pages/invoices";
import { PayrollPage } from "./pages/Pyrolls";
import { AnalyticsPage } from "./pages/Analytics";

const loginPage = new WorkstreamLoginPage();
const projectLog = new ProjectLog();
const trainingPage = new TrainingPage();
const leavePage = new LeavePage();
const expenseClaim = new ExpenseClaim();
const organogram = new OrganogramPage();
const teamReview = new TeamReviewPage();
const formsPage = new FormsPage();
const invoicesPage = new InvoicesPage();
const payrollPage = new PayrollPage();
const analyticsPage = new AnalyticsPage();

describe('Validate Workstream functionality', () => {
beforeEach(()=>{
    const email = Cypress.env('email');
    const password = Cypress.env('password');
    cy.login(email, password);
    
});

  
it('Should Navigate to Home page', () => {
loginPage.navigateToUrl('home/');
cy.wait(8000);
cy.url().should('include',"/home" );
cy.wait(5000);
});

it('Project Logs',()=>{

loginPage.navigateToUrl('home/');
cy.wait(8000);
projectLog.clickToProjectLog();
cy.wait(8000);
cy.url().should('include',"/project-logs/");
cy.wait(5000);
});

it('Training',()=>{
cy.wait(8000);    
loginPage.navigateToUrl('project-logs/');
cy.wait(8000);
trainingPage.clickToTraining();//training tab
});

it('Leave, Dashboard',()=>{
loginPage.navigateToUrl('training/dashboard/');
cy.wait(5000);
leavePage.ClickToLeaveDashboardTab();
cy.wait(5000);
});

it('Leave, Leave Summary',()=>{
loginPage.navigateToUrl('leaves/dashboard/');
cy.wait(5000);
leavePage.ClickToLeaveSummaryTab();
cy.wait(5000);
});

it('Expense Claim,Dashboard',()=>{
loginPage.navigateToUrl('leaves/calendar/?tab=0&person_id=1904');
cy.wait(5000);
expenseClaim.ClickToDashboardTab();
cy.wait(5000);

});

it('Expense Claim,Review Expenses',()=>{
loginPage.navigateToUrl('expenses/dashboard/?fromDate=2023-01-01&toDate=2023-12-31&limit=10&page=0');
cy.wait(5000);
expenseClaim.ClickToReviewExpensesTab();
cy.wait(5000);
});

it('Expense Claim, Expense Report',()=>{
loginPage.navigateToUrl('expenses/review/');
cy.wait(5000);
expenseClaim.ClickToExpenseReport();
cy.wait(5000);

});

it('Organogram',()=>{
loginPage.navigateToUrl('expenses/report/');
cy.wait(5000);
organogram.ClickToOrganogramTab();
cy.wait(5000);
});

it('Team Review, Dashboard',()=>{
loginPage.navigateToUrl('organogram/?tabIndex=0');
cy.wait(5000);
teamReview.ClickToTeamReviewsDashboardTab()
cy.wait(5000);
});

it('Team Review, Review Progress Advisory',()=>{
    loginPage.navigateToUrl('team-review/dashboard/?team_id=-1&year=-1&meeting_type=3');
    cy.wait(5000);
   teamReview.ClickToReviewProgressAdvisoryTab()
    cy.wait(5000);
});
it('Team Review, Project Architecture Advisory',()=>{
    loginPage.navigateToUrl('advisory/progress/');
    cy.wait(5000);
   teamReview.ClickToProjectArchitectureAdvisoryTab()
    cy.wait(5000);
});    


it('Forms, Dashboard',()=>{
loginPage.navigateToUrl('advisory/architecture/');
cy.wait(5000);
formsPage.ClickToDashboardTab();
cy.wait(5000);
});

it('Forms, Review Loan',()=>{
loginPage.navigateToUrl('forms/dashboard/');
cy.wait(5000);
formsPage.ClickToReviewLoanTab();
cy.wait(5000);
});

it('Forms, Review Advance Salary',()=>{
loginPage.navigateToUrl('forms/review/loan/');
cy.wait(5000);
formsPage.ClickToReviewAdvanceSalaryTab();
cy.wait(5000);
});

it('Forms, Review Vehicle',()=>{
loginPage.navigateToUrl('forms/review/advance-salary/');
cy.wait(5000);
formsPage.ClickToReviewVehicleTab();
cy.wait(5000);
});

it('Forms, Review Social Impact',()=>{
loginPage.navigateToUrl('forms/review/vehicle/');
cy.wait(5000);
formsPage.ClickToReviewSocialImpactTab();
cy.wait(5000);
});

it('Forms, Review ISMS Incident',()=>{
loginPage.navigateToUrl('forms/review/social-impact/');
cy.wait(5000);
formsPage.ClickToReviewISMSIncidentTab();
cy.wait(5000);
});

it('Forms, Review Transitions',()=>{
loginPage.navigateToUrl('forms/review/isms-incident/');
cy.wait(5000);
formsPage.ClickToReviewTransitionsTab();
cy.wait(5000);
});

it('Forms, Review Society SignUp',()=>{
loginPage.navigateToUrl('forms/review/transition/');
cy.wait(5000);
formsPage.ClickToReviewSocietySignUpTab();
cy.wait(5000);
});

it('Forms, POD Clearance',()=>{
loginPage.navigateToUrl('forms/review/society-signup/');
cy.wait(5000);
formsPage.ClickToPODclearanceTab();
cy.wait(5000);
});

it('Forms, IT Clearance',()=>{
loginPage.navigateToUrl('forms/review/pod-clearance/');
cy.wait(5000);
formsPage.ClickToITclearanceTab();
cy.wait(5000);
});

it('Forms, TL Clearance',()=>{
loginPage.navigateToUrl('forms/review/it-clearance/');
cy.wait(5000);
formsPage.ClickToTLclearanceTab();
cy.wait(5000);
});

it('Forms, Admin Clearance',()=>{
loginPage.navigateToUrl('forms/review/tl-clearance/');
cy.wait(5000);
formsPage.ClickToAdminClearanceTab();
cy.wait(5000);
});

it('Invoices, Dashboard',()=>{
loginPage.navigateToUrl('forms/review/admin-clearance/');
cy.wait(5000);
invoicesPage.ClickToDashboardTab();
cy.wait(5000);
});

it('Invoices, Summary Report',()=>{
    loginPage.navigateToUrl('invoices/dashboard/?status=-1&first_month=2023-04-01&second_month=2023-03-01');
    cy.wait(5000);
    invoicesPage.ClickToSummaryReportTab();
    cy.wait(5000);
});

it('Invoices, Contracts',()=>{
    loginPage.navigateToUrl('invoices/reports/summary/');
    cy.wait(5000);
    invoicesPage.ClickToContractsTab();
    cy.wait(5000);
});

it('Payroll, Dashboard',()=>{
loginPage.navigateToUrl('invoices/client-contracts/?tabIndex=0');
cy.wait(5000);
payrollPage.ClickToDashboardTab();
cy.wait(5000);
});


it('Payroll, Sub Contractor',()=>{
    loginPage.navigateToUrl('payroll/dashboard/');
    cy.wait(5000);
    payrollPage.ClickToSubContractorTab();
    cy.wait(5000);
});

it('Payroll, Final Settlement',()=>{
    loginPage.navigateToUrl('payroll/sub_contractor/');
    cy.wait(5000);
    payrollPage.ClickToFinalSettlementTab();
    cy.wait(5000);
});

it('Payroll, Tax Certificate',()=>{
    loginPage.navigateToUrl('payroll/final-settlement/');
    cy.wait(5000);
    payrollPage.ClickToTaxCertificateTab();
    cy.wait(5000);
});

it('Payroll, People Report',()=>{
    loginPage.navigateToUrl('payroll/certificate/');
    cy.wait(5000);
    payrollPage.ClickToPeopleReportTab()
    cy.wait(5000);
});

it('Analytics, Summary',()=>{
loginPage.navigateToUrl('payroll/people/');
cy.wait(10000);
analyticsPage.ClickToSummaryTab();
cy.wait(10000);
});

it('Analytics, Other reports',()=>{
    loginPage.navigateToUrl('analytics/summary');
    cy.wait(10000);
    analyticsPage.ClickToOtherReportsTab();
    cy.wait(10000);
});

});
