import '../login.cy'


describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    });

    it("Validadno Inicio al Sistema ", () => {


        cy.wait(1000);


        //eliminar de usuarios

        cy.get(':nth-child(1) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/usuarios/lista"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.wait(1000);

        //Cambiar el ID dependiendo el usuario que desee eliminar
        cy.get('[data-id="130"] > .MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--textCenter > [aria-label="Eliminar usuario"]').click()
        cy.wait(2000);


        //Boton de Eliminar

        //SI
        //  cy.get('.css-hndopl > :nth-child(1)').click()

        //NO
        // cy.get('.css-hndopl > :nth-child(2)').click()



    })

})

