import faker from "faker"
import { NumeroDeDireccion, numeroRandom, tipoDireccion, crearCelular, crearTelefono, generarParrafo } from "../funciones.cy";

describe("Formularios Abierto", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/registroBeneficiario");
        // cy.get('[name="email"]').type('xofia@admin.com');
        // cy.get('[name="password"]').type('Abcdefg1!');
        // cy.get('[type="submit"]').click();
        cy.wait(1000);
    });

    it("Registro de beneficiario", () => {

        //TIPO DE IDENTIFICACION
        cy.get('#mui-component-select-idDocumentType').click();
        cy.get('[data-value="1"]').click();

        cy.get('[name="identificationNumber"]').type("11111");
        cy.wait(3000);
        cy.get('[name="email"]').type();


        cy.get('[name="firstName"]').type();
        cy.get('[name="middleName"]').type();
        cy.get('[name="firstSurname"]').type();
        cy.get('[name="secondSurname"]').type();


        //GENERO

        cy.get('[id="mui-component-select-idGender"]').click();
        cy.get('[data-value="1"]').click();


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
        cy.get('[name="address.description"]').type(parrafo)

        //CELULAR
        const Acelular = crearCelular();
        cy.get('.MuiGrid-container > :nth-child(10)').type(Acelular)

        //TELEFONO
        const Atelefono = crearTelefono();
        cy.get('[name="telephone"]').type(Atelefono)

        //CORREO
        const correo = faker.internet.email();
        cy.get('[name="email"]').type(correo)



    })



})