import { generarNIT, crearCelular } from '../funciones.cy.js'
import faker from 'faker'
import '../login.cy'




describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    });


    it('Validar Inicio al Sistema', () => {


        /* -------------REGISTRO DE USUARIO COMO PROVEEDOR---------*/

        cy.get(':nth-child(1) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/usuarios/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.wait(1000);

        // TIPO DE IDENTIFICACION COMO CEDULA
        cy.get('#mui-component-select-idDocumentType').click()
        cy.get('[tabindex="0"] > .MuiTypography-root').click()

        //NUMERO DE IDENTIFICACION
        const Numeroidentificacion = generarNIT();
        cy.get('[name="identificationNumber"]').type(Numeroidentificacion)

        //NOMBRE DE USUARIO
        const nombre = faker.name.firstName();
        cy.get('[name="name"]').type(nombre)


        //APELLIDO DE USUARIO
        const apellido = faker.name.lastName();
        cy.get('[name="lastName"]').type(apellido)

        //CORREO ELECTRONICO
        // const Acorreo = faker.internet.email();
        cy.get('[name="email"]').type(/* Acorreo */ 'pruebaswow@outlook.com')


        //NUMERO DE CELULAR
        const aletorioNumero = crearCelular();
        cy.get('[name="cellPhone"]').type(aletorioNumero)

        //TIPO DE USUARIO PROVEEDOR
        cy.get('[id="mui-component-select-userType"]').click()
        cy.get('[data-value="3"]').click()

        //PROVEEDOR DE ASOCIADO
        cy.get('#mui-component-select-idThirdParty').click()
        cy.get('[data-value="2"] > .MuiTypography-root').click()


        cy.wait(10000)


        //BOTON DE CREAR
        cy.get('[data-testid="SaveIcon"]').click()

    });
});