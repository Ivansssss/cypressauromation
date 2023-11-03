describe('Handle tabs', ()=> {
    it('Approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

        cy.get('.example>a').invoke('removeAttr', 'target').click() //clicking on the link

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // child tab

        //operations

        cy.go('back') // Back to Parent tab
    })

    it.skip ('Approach2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows') //parent tab

        cy.get('.example > a').then((e) => {

                let url = e.prop('href')
                cy.visit(url)

        })//clicking on the link
})
})