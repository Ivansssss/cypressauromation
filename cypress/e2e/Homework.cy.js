describe('Final Homework',  ()=> {
    it('Automation Testing', ()=> {

        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')

        cy.get('.mainHeading').should('have.text', 'XYZ Bank')

        cy.get("button[ng-click='customer()']").click()

        cy.get('#userSelect').select('Ron Weasly')
        
        cy.contains('Login').click()
        //Login

        cy.get('strong:nth-child(3)').should('have.text','Dollar')
    
        cy.get(".btn.btn-lg.tab[ng-class='btnClass2']").click()

        cy.get("input[placeholder='amount']").type('30')
        cy.get("button[type='submit']").click()
        cy.get('.error.ng-binding').should('be.visible').should('have.text', 'Deposit Successful')
        cy.wait(2000)
        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()
        //Deposit

        cy.get("tr[id='anchor0'] td:nth-child(2)").should('be.visible').should('have.text','30')
        cy.xpath("//td[normalize-space()='Credit']").should('have.text','Credit')
        cy.get("button[ng-click='back()']").click()
        //Transactions

        cy.get(".btn.btn-lg.tab[ng-class='btnClass3']").click()
        cy.get("input[placeholder='amount']").type('30')
        cy.get("button[type='submit']").click()
        cy.get('.error.ng-binding').should('be.visible').should('have.text','Transaction successful')
        cy.wait(2000)
        cy.get(".btn.btn-lg.tab[ng-class='btnClass1']").click()
        //Withdrawn

        cy.xpath("//td[normalize-space()='Debit']").should('have.text','Debit')
        //Transactions

    })
})