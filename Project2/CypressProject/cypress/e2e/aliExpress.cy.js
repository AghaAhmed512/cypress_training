/// <reference types="Cypress" />

describe('Ali Express',()=>{
    before(()=>{
        cy.visit('https://best.aliexpress.com/?af=5c46e34a30d15&dp=5c46e34a30d15&aff_fcid=cdd8670a9aa3419cb1030bfc93a08d91-1680598549807-00145-_DBDXrxD&tt=CPS_NORMAL&aff_fsk=_DBDXrxD&aff_platform=portals-promotion&sk=_DBDXrxD&aff_trace_key=cdd8670a9aa3419cb1030bfc93a08d91-1680598549807-00145-_DBDXrxD&terminal_id=d623f5e2b8fd402491656dad8436b76a')

    })
        
    it('should load the home page successfully',()=>{
       
        cy.title().should('contain', 'AliExpress - Online Shopping for Popular Electronics, Fashion, Home & Garden, Toys & Sports, Automobiles and More.')

    });
    it('should search for a product and display results',()=>{
        //cy.visit('https://best.aliexpress.com/?af=5c46e34a30d15&dp=5c46e34a30d15&aff_fcid=cdd8670a9aa3419cb1030bfc93a08d91-1680598549807-00145-_DBDXrxD&tt=CPS_NORMAL&aff_fsk=_DBDXrxD&aff_platform=portals-promotion&sk=_DBDXrxD&aff_trace_key=cdd8670a9aa3419cb1030bfc93a08d91-1680598549807-00145-_DBDXrxD&terminal_id=d623f5e2b8fd402491656dad8436b76a')
        cy.reload()
        cy.get('#search-key').type('laptop')

    })

})