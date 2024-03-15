import '../login.cy'



describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    });

    it("Validadno Inicio al Sistema ", () => {


        cy.wait(1000);


        //Editar de usuarios

        cy.get(':nth-child(1) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/usuarios/lista"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.wait(1000);

        cy.get('[data-id="1"] > .MuiDataGrid-cell--withRenderer.MuiDataGrid-cell--textCenter > a > .MuiButtonBase-root').click()
        cy.wait(20000);


        //Boton de Editar
        cy.get('.sc-gsFSXq > .MuiTypography-root').click()


    })

})

