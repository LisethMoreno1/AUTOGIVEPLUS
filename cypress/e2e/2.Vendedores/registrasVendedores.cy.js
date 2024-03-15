import { NumeroIdentificacion, NumeroDeDireccion, numeroRandom, tipoDireccion, crearCelular, crearTelefono, generarParrafo } from "../funciones.cy";
import faker from "faker"
import '../login.cy'



describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    });


    it('Validar Inicio al Sistema', () => {

        //REGISTRO DE VENDEDORES
        cy.get(':nth-child(6) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/vendedores/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.wait(1000);


        /*-------------INFORMACION DEL VENDEDOR---------*/

        //TIPO DE IDENTIFICACIÓN CEDULA
        cy.get('#mui-component-select-idDocumentType').click()
        cy.get('[data-value="1"] > .MuiTypography-root').click()


        //NUMERO DE IDENTIFICACION
        const identificacionNumero = NumeroIdentificacion();
        cy.get('[name="identificationNumber"]').type(identificacionNumero);

        //GENERO
        cy.get('[id="mui-component-select-idGender"]').click()
        cy.get('[data-value="2"]').click()

        //MEMBRESIA
        //cy.get('[id="mui-component-select-thirdPartySeller.idThirdParty"]').click()

        //NOMBRE
        const nombre = faker.name.firstName()
        cy.get('[name="firstName"]').type(nombre)

        //APELLIDO
        const apellido = faker.name.lastName();
        cy.get('[name="firstSurname"]').type(apellido)




        /* -------------INFORMACION DE RESIDENCIA Y CONTACTO---------*/

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
        const aleatorioCelular = crearCelular();
        cy.get(':nth-child(10) > .MuiFormControl-root > .MuiInputBase-root').type(aleatorioCelular)

        //TELEFONO
        const aleatorioTelefono = crearTelefono();
        cy.get('[name="telephone"]').type(aleatorioTelefono)

        //CORREO
        const correo = faker.internet.email();
        cy.get('[name="email"]').type(correo)

        //BOTON DE CREAR
        cy.get(':nth-child(12) > .MuiFormControl-root > .MuiInputBase-root').click()


    })
})


