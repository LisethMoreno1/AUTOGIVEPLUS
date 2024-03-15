import { generarParrafo, generarNIT, NumeroDeDireccion, numeroRandom, tipoDireccion, crearCelular, crearTelefono, FechaInicio, FechaFinal } from "../funciones.cy";
import faker from "faker"
import '../login.cy'


describe('Login de Xofia', () => {

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
      });


    it('Validar Inicio al Sistema', () => {


        //REGISTRO DE MEMBRESIA JURIDICA
        cy.get(':nth-child(3) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
        cy.get('[href="/membresias/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
        cy.wait(1000);


        /* -------------INFORMACION DE LA MEMBRESIA ---------*/

        //NIT
        const NumeroIdentificacion = generarNIT();
        cy.get('[name="identificationNumber"]').type(NumeroIdentificacion)


        //RAZON SOCIAL
        const nombreDeEmpresa = faker.company.companyName();
        cy.get('[name="businessName"]').type(nombreDeEmpresa)

        /* -------------REPRESENTANTE LEGAL---------*/

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
        const parrafo1 = generarParrafo();
        cy.get('[name="address.description"]').type(parrafo1)

        //CELULAR
        const Acelular = crearCelular();
        cy.get('.MuiGrid-container > :nth-child(10)').type(Acelular)

        //TELEFONO
        const Atelefono = crearTelefono();
        cy.get('[name="telephone"]').type(Atelefono)

        //CORREO
        const correo = faker.internet.email();
        cy.get('[name="email"]').type(correo)

        /* -------------VIGENCIAS---------*/


        //BENEFICIO ADQUIRIDO
        cy.get('[name="customerValidity.acquiredBeneficiary"]').type("10")

        //BENEFICIO REGISTRADO
        cy.get('[name="customerValidity.consumedBeneficiary"]').type("10")

        //FECHA DE INICIO
        const fecha1 = FechaInicio();
        cy.get('[name="customerValidity.startDate"]').type(fecha1)

        //FECHA DE FINAL
        const fecha2 = FechaFinal();
        cy.get('[name="customerValidity.endDate"]').type(fecha2)

        //MONTO
        cy.get('[name="customerValidity.amountPaid"]').type("100000")

        //DETALLES
        const parrafo = generarParrafo();
        cy.get(':nth-child(4) > .MuiGrid-container > :nth-child(6)').type(parrafo)

        //VENDEDOR
        cy.get('[id="mui-component-select-customerValidity.idSeller"]').click()

        //BOTON DE CREAR
        cy.get('.css-19atif2 > .MuiButtonBase-root').click()


    })
})