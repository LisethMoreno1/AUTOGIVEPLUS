import { codigoBeneficio, categoria, FechaInicio, FechaFinal } from "../funciones.cy"
import faker from "faker"
import '../login.cy'
import 'cypress-file-upload';



describe('Login de Xofia', () => {


    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    });


    for (let i = 0; i < 1; i++) {
        it(`Prueba ${i + 1}: Xofia`, () => {

            //REGISTRO DE BENEFICIO
            cy.get(':nth-child(4) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
            cy.get('[href="/beneficios/registro"] > .sc-ikkxIA > .MuiTypography-root').click()
            cy.wait(5000);

            /* -------------DATOS DEL BENEFICIO---------*/
            const rutaImagenLocal = "D:\Desktop\Fotos Pruebas\descarga.png";
            cy.get('[data-testid="AddPhotoAlternateIcon"]').dblclick().attachFile({
                filePath: rutaImagenLocal,
                encoding: 'base64'
            });



            //COMERCIO
            cy.get('#mui-component-select-idThirdParty').click()
            cy.wait(3000)

            cy.get('#mui-component-select-typeBeneficiary').click()
            cy.get('[data-value="1"]').click()


            //NOMBRE
            const palabraClave = faker.random.word();
            cy.get('[name="name"]').type(palabraClave)

            //CODIGO
            const codigo = codigoBeneficio();
            cy.get('[name="number"]').type(codigo)

            //CATEGORIA
            cy.get('[id="mui-component-select-idCategory"]').click();
            cy.get(`[data-value=${categoria()}]`).click()

            //DESCRIPCION
            const parrafo = faker.lorem.paragraph();
            cy.get('.MuiGrid-grid-lg-8 > .MuiFormControl-root > .MuiInputBase-root').type(parrafo)

            /* -------------VIGENIAS DEL BENEFICIO---------*/

            //USO POR CUPON
            // const codigovigencia = codigoBeneficio();
            cy.get('[name="benefitValidity.usagePerson"]').type('1')

            //PERIOSIDAD
            cy.get('[name="benefitValidity.periodicity"]').type('5')


            //TOTAL DE BENEFICIO
            cy.get('[name="benefitValidity.useLimit"]').type('10')

            //USO POR COMPRA
            cy.get('[name="benefitValidity.purchase"]').type('1')


            //FECHA DE INICIO
            const fecha1 = FechaInicio();
            cy.get('[name="benefitValidity.startDate"]').type(fecha1)

            //FECHA DE FINAL
            const fecha2 = FechaFinal();
            cy.get('[name="benefitValidity.endDate"]').type(fecha2)

            //BOTON DE CREAR
            cy.get('.sc-jEACwC > .MuiTypography-root').click()


            if (i === 0) {
                cy.log('se creo');
            } else {
                cy.log('no se creo');
            }
        });
    }
})

