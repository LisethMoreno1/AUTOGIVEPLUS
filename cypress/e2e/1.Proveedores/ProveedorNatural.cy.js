import { generarParrafo ,NumeroIdentificacion, NumeroDeDireccion, numeroRandom, tipoDireccion, crearCelular } from "../funciones.cy";
import faker from "faker"
import '../login.cy'



describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
      });


    it('Validar Inicio al Sistema', () => {
    


        //REGISTRO DE PROVEEDOR NATURAL
        cy.get(':nth-child(2) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/proveedores/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.get('[id="simple-tab-2"]').click()
        cy.wait(1000);


        /* -------------INFORMACION DEL PROVEEDOR---------*/

        //TIPO DE IDENTIFICACIÓN CEDULA
        cy.get('#mui-component-select-idDocumentType').click()
        cy.get('[data-value="1"] > .MuiTypography-root').click()


        //NUMERO DE IDENTIFICACION
        const identificacionNumero = NumeroIdentificacion();
        cy.get('[name="identificationNumber"]').type(identificacionNumero)

        //GENERO
        cy.get('[id="mui-component-select-idGender"]').click()
        cy.get('[data-value="1"]').click()


        //NOMBRE
        const nombre = faker.name.firstName()
        cy.get('[name="firstName"]').type(nombre)

        //APELLIDO
        const apellido = faker.name.lastName();
        cy.get('[name="firstSurname"]').type(apellido)




        /*-------------INFORMACION DE RESIDENCIA Y CONTACTO---------*/

        //DEPARTAMENTO
        cy.get('[id="mui-component-select-address.idDepartment"]').click()
        cy.wait(3000)
        cy.get(`[data-value=${numeroRandom()}]`).click();


        //CUIDAD
        cy.get('[id="mui-component-select-address.idCity"]').click()
        cy.wait(3000)

        //BARRIO
        const lugarAleatorio = faker.address.city();
        cy.get('[name="address.neighBorhood"]').type(lugarAleatorio)

        //TIPO DE DIRECCION 1
        cy.get('[id="mui-component-select-address.idAddressFirstStreetType"]').click()
        cy.get(`[data-value=${tipoDireccion()}]`).click();

        //NUMERO 1
        const NumeroAleatorio = NumeroDeDireccion();
        cy.get('[name="address.firstStreetNumber"]').type(NumeroAleatorio)

        //TIPO DE DIRECCION 2
        cy.get('[id="mui-component-select-address.idAddressSecondStreetType"]').click()
        // cy.get(`[data-value=${tipoDireccion()}]`).click();
        cy.get('[data-value="5"]').click()


        //NUMERO 2
        cy.get('[name="address.secondStreetNumber"]').type(NumeroAleatorio)

        //NUMERO 3
        cy.get('[name="address.thirdStreetNumber"]').type(NumeroAleatorio)

         //DETALLES
         const parrafo = generarParrafo();
         cy.get('[name="address.description"]').type(parrafo);

        //CELULAR
        const Acelular = crearCelular();
        cy.get('.MuiGrid-container > :nth-child(10)').type(Acelular)

        //CORREO
        const correo = faker.internet.email();
        cy.get('[name="email"]').type(correo)

        //BOTON DE CREAR
        cy.get('.css-19atif2 > .MuiButtonBase-root').click()


    })
})
