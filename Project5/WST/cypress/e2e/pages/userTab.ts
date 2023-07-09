export class UserTab{
    LocatorUserTab:string = ".MuiButton-label > img[alt='profile_pic']";
    LocatorForProfile:string = "#menu-list-grow > :nth-child(3) > :nth-child(1)";
    LocatorForChangePasswor:string = "#menu-list-grow > :nth-child(3) > :nth-child(2)";
    LocatorForLogout:string ="#menu-list-grow > :nth-child(3) > :nth-child(3)";
    locatorForCancelButton:string = '[type="button"]';
    
    
    locatorForProfileEditButtion:string ='.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label';
    locatorForContactName:string = ':nth-child(2) > :nth-child(2) >.MuiGrid-container > :nth-child(1) >.MuiFormControl-root >.MuiInputBase-root >.MuiInputBase-input';
    locatorForContactRelation:string= '#mui-component-select-emergencyContactRelation';
    
    clickToUserTab() {
        cy.get(this.LocatorUserTab).click();
      }
    clickToProfileButton(){
    
        cy.get(this.LocatorForProfile).click();
    }    
    //// Assert on the options of the dropdown
    assert(){
        cy.get('.MuiMenu-paper ul li')
        .each(($options)=>{
            //dynamically determine the number of options in the dropdown without specifying an expected count
            
            //const optionsCount = $options.length;
            //cy.log(`Number of options: ${optionsCount}`);
            
           // To print the options in the dropdown
            const optionText = $options.text().trim();
            cy.log(optionText + '\n');
            
        });
    } 
    
    clickToChangePasswordButton(){
        cy.get(this.LocatorForChangePasswor).click()
        cy.wait(3000);
    }
    
    clickToProfileEditButtion(){
        cy.get(this.locatorForProfileEditButtion).click();
    }
    
    TypeContactName(name:string){    
    cy.get(this.locatorForContactName).type(name);
    }
    
    clickToContactRelation(){
    cy.get(this.locatorForContactRelation).click();
    
    }
    
    
    
    clickToCancel(){
        cy.get(this.locatorForCancelButton).click();
    }
    clickToLogoutButton(){
    
    cy.get(this.LocatorForLogout).click()
        }    
        
    
     } 