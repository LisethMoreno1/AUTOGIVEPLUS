Cypress.Commands.add('login', () => {

        cy.visit("https://qafront.xofia.com.co/");
        cy.get('[name="email"]').type('ADMIN@XOFIA.COM')
        cy.get('[name="password"]').type('Xofia123.')
        cy.get('[type="submit"]').click()
        cy.wait(1000);


});
