

export class JobRequisition{

filterButtonSelector:string = '.MuiButton-containedSecondary';
filterMenuListSelector:string = 'form .MuiGrid-root'

// team_role_recruiter_techstackDropdown:string = 'form .MuiGrid-root .normal-select__indicator';
// experience_natureOfRequirement_type_status_ReplacementorNewOpeningDropdown = 'form .MuiSvgIcon-root';

// Method to navigate to the specified URL
navigateToUrl(url: string):void{
        cy.visit(url);
}

// Method to click on the filter button
clickOnFilterButton(){
    cy.get(this.filterButtonSelector).click();
    cy.get('.forms-filters').should('be.visible');
}


// Method to verify the presence of the team dropdown
assertTeamDropdown(){
    cy.get(this.filterMenuListSelector).contains('Team').should('exist');
}


// Method to verify the presence of the role dropdown
assertRoleDropdown(){
    cy.get(this.filterMenuListSelector).contains('Role').should('exist');
}


// Method to verify the presence of the recruiter dropdown
assertRecruiterDropdown(){
    cy.get(this.filterMenuListSelector).contains('Recruiter').should('exist');
}


// Method to verify the presence of the experience dropdown
assertExperienceDropdown(){
    cy.get(this.filterMenuListSelector).contains('Experience').should('exist');
}

// Method to verify the presence of the nature of requirement dropdown
assertNatureOfRequirementDropdown(){
    cy.get(this.filterMenuListSelector).contains('Nature Of Requirement').should('exist');
}

// Method to verify the presence of the type dropdown
assertTypeDropdown(){
    cy.get(this.filterMenuListSelector).contains('Type').should('exist');
}

// Method to verify the presence of the status dropdown
assertStatusDropdown(){
    cy.get(this.filterMenuListSelector).contains('Status').should('exist');
}

// Method to verify the presence of the replacement or new opening dropdown
assertReplacementOrNewOpeningDropdown(){
    cy.wait(2000)
    cy.get(this.filterMenuListSelector).contains('Replacement or New Opening').should('exist');
}

// Method to verify the presence of the tech stack dropdown
assertTechStackDropdown(){
    cy.get(this.filterMenuListSelector).contains('Tech Stack').should('exist');
}

// Method to verify the presence of the Rest button
assertResetButton(){
    cy.get(this.filterMenuListSelector).contains('Reset').should('exist');
}
// Method to verify the presence of the Apply button
assertApplyButton(){
    cy.get(this.filterMenuListSelector).contains('Apply').should('exist');
}

clickOnFilltermenu(){
    cy.get('.forms-filters').click();
}
clickOnTeamDropdown(){
    
cy.get('form > .MuiGrid-container > :nth-child(1)').click();
cy.fixture('dropdownValues.json').then((dropdownValues)=>{
    const teamDropdownValues = dropdownValues.teamDropdownValues;
    cy.get('.normal-select__menu-list').then((menuList)=>{
        teamDropdownValues.forEach((value:string)=>{
            cy.wrap(menuList).should('contain',value)
            
        });
    });
   
  });
      
};

clickOnRoleDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(2)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{
    const roleDropdownValues = dropdownValues.roleDropdownValues;
    cy.get('.normal-select__menu-list').then((menuList)=>{
        roleDropdownValues.forEach((value:string)=>{
            cy.wrap(menuList).should('contain',value)
        })
    })    
    })
}
clickOnRecruiterDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(3)').click();
    
}
clickOnExperienceDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(4)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{

        const experienceDropdownValues = dropdownValues.experienceDropdownValues;
        cy.get('ul[role="listbox"]').then((menuList)=>{
    
            experienceDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });
    });
}
clickOnNatureOfRequirementDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(5)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{

        const natureOfRequirementDropdownValues = dropdownValues.natureOfRequirementDropdownValues;
        cy.get('ul[role="listbox"]').then((menuList)=>{
    
            natureOfRequirementDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });
    });
}
clickOnTypeDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(6)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{

        const typeDropdownValues = dropdownValues.typeDropdownValues;
        cy.get('ul[role="listbox"]').then((menuList)=>{
    
            typeDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });
    });
}

clickOnStatusDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(7)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{

        const statusDropdownValues = dropdownValues.statusDropdownValues;
        cy.get('ul[role="listbox"] li').then((menuList)=>{
    
            statusDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });
    });
}

clickOnReplacementOfNewOpeningDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(8)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{

        const replacementOrNewOpeningDropdownValues = dropdownValues.replacementOrNewOpeningDropdownValues;
        cy.get('ul[role="listbox"]').then((menuList)=>{
    
            replacementOrNewOpeningDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });
    });
}
clickOnTechStackDropdown(){
    cy.get('form > .MuiGrid-container > :nth-child(9)').click();
    cy.fixture('dropdownValues.json').then((dropdownValues)=>{
        const techStackDropdownValues = dropdownValues.techStackDropdownValues;
        cy.get('.normal-select__menu-list').then((menuList)=>{
            techStackDropdownValues.forEach((value:string)=>{
                cy.wrap(menuList).should('contain',value)
            });
        });    
    });
};

}