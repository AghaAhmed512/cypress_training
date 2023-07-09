export class TrainingPage{
locatorForTrainingTab: string = 'nav > div:nth-child(n)'; 

clickToTraining(){
    cy.get(this.locatorForTrainingTab).contains('Training').click();
}
}