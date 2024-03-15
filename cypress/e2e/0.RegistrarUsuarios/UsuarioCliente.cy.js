import { generarNIT, crearCelular } from '../funciones.cy.js'
import faker from 'faker'
import '../login.cy'


describe('Login de Xofia', () => {

  beforeEach(() => {
    cy.login();
    cy.wait(4000);
  });

  it("Validadno Inicio al Sistema ", () => {


    /* -------------REGISTRO DE USUARIO COMO CLIENTE---------*/

    cy.get(':nth-child(1) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
    cy.get('[href="/usuarios/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
    cy.wait(1000);

    //TIPO DE USUARIO CEDULA
    cy.get('#mui-component-select-idDocumentType').click()
    cy.get('[data-value="1"] > .MuiTypography-root').click()

    //NUMERO DE IDENTIFICACION ALEATORIO
    const Numeroidentificacion = generarNIT();
    cy.get('[name="identificationNumber"]').type(Numeroidentificacion);


    //NOMBRE DE USUARIO
    const nombre = faker.name.firstName();
    cy.get('[name="name"]').type(nombre)

    //APELLIDO DE USUARIO
    const apellido = faker.name.lastName();
    cy.get('[name="lastName"]').type(apellido)

    //CORREO ELECTRONICO
    //const correo = faker.internet.email();
    cy.get('[name="email"]').type(/* correo */ 'pruebaswow@outlook.com')


    // NUMERO DE CELULAR
    const aletorioNumero = crearCelular();
    cy.get('[name="cellPhone"]').type(aletorioNumero)


    /* -------------  TIPO DE USUARIOS ---------*/

    //CLIENTE
    cy.get('[id="mui-component-select-userType"]').click()
    cy.get('[data-value="2"]').click()


    cy.wait(10000)

    cy.get('[data-testid="SaveIcon"]').click()

  })
})