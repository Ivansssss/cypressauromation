describe('My First test', () =>
{

it('Verify Title Positive', () =>
{
cy.visit("http://rahulshettyacademy.com/seleniumPractise/#/")

cy.title().should('eq','.gb-headline.gb-headline-5226e569.gb-headline-text')
})

it('verify title negative', () =>
{
cy.visit('https://restfulapi.net/http-status-codes/')

cy.title().should('eq', 'Tennis Betting & Football Odds > 888sport')
})
})