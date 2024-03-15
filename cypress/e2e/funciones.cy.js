import faker from "faker";

//GENERAR NIT

export const generarNIT = () => {
    const longitudNIT = faker.random.number({ min: 9, max: 11 })
    let nit = "";

    for (let i = 0; i < longitudNIT; i++) {
        nit += faker.random.arrayElement("0123456789");
    }
    return `${nit}`;
};


//GENERAR NUMERO DE IDENTIFICACION


export const NumeroIdentificacion = () => {
    let Identificacion = '1';

    for (let i = 1; i < 10; i++) {
        Identificacion += faker.random.number({ min: 0, max: 9 }).toString();
    }

    return `${Identificacion}`;
};

//GENERAR CELULAR

export const crearCelular = () => {
    let celular = '3';
    for (let i = 1; i < 10; i++) {
        celular += faker.random.number({ min: 0, max: 9 });
    }

    return `${celular}`;
};

//GENERAR TELEFONO

export const crearTelefono = () => {
    const longitudTelefono = faker.random.number({ min: 8, max: 8 });
    let telefono = '';

    for (let i = 0; i < longitudTelefono; i++) {
        telefono += faker.random.number({ min: 0, max: 8 })
    }
    return `${telefono}`;
};

//GENERAR BENEFICIO

export const codigoBeneficio = () => {
    const longitudcodigo = faker.random.number({ min: 7, max: 7 });
    let codigo = '';

    for (let i = 0; i < longitudcodigo; i++) {
        codigo += faker.random.number({ min: 0, max: 9 })
    }
    return `${codigo}`;
};


//NUMERO DE DIRECCIÓN

export const NumeroDeDireccion = () => {
    const longitudDireccion = faker.random.number({ min: 2, max: 2 });
    let NumeroDireccion = ''

    for (let i = 0; i < longitudDireccion; i++) {
        NumeroDireccion += faker.random.number({ min: 1, max: 2 })
    }
    return `${NumeroDireccion}`;
};


//NUMERO PARA ELEGIR DEPARTAMENTO
export const numeroRandom = () => {
    const longitudDireccion = faker.random.number({ min: 1, max: 1 });
    let numeroRandom = ''

    for (let i = 0; i < longitudDireccion; i++) {
        numeroRandom += faker.random.number({ min: 1, max: 30 })
    }
    return `${numeroRandom}`;
};

//NUMERO DE TIPO DE DIRECCION

export const tipoDireccion = () => {
    const longitudtipoDireccion = faker.random.number({ min: 1, max: 1 });
    let tipoDireccion = ''

    for (let i = 0; i < longitudtipoDireccion; i++) {
        tipoDireccion += faker.random.number({ min: 1, max: 1 })
    }
    return `${tipoDireccion}`;

};

// TIPO DE CATEGORIA DE UN BENEFICIO
export const categoria = () => {
    const longitudtipoCategoria = faker.random.number({ min: 1, max: 1 });
    let tipoCategoria = ''

    for (let i = 0; i < longitudtipoCategoria; i++) {
        tipoCategoria += faker.random.number({ min: 1, max: 11 })
    }
    return `${tipoCategoria}`;

};


// FECHA DE INICIO
export const FechaInicio = () => {
    const dia = faker.random.number({ min: 1, max: 30 }).toString().padStart(2, '0');
    const mes = faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0');
    const año = faker.random.number({ min: 2022, max: 2023 });

    return `${año}-${mes}-${dia}`

};

//FECHA FINAL
export const FechaFinal = () => {
    const dia = faker.random.number({ min: 1, max: 30 }).toString().padStart(2, '0');
    const mes = faker.random.number({ min: 1, max: 12 }).toString().padStart(2, '0');
    const año = faker.random.number({ min: 2024, max: 2024 });

    return `${año}-${mes}-${dia}`

};

// GENERAR PARRAFO
export const generarParrafo = () => {
    const parrafo = faker.lorem.paragraph().slice(0, 30);
    return parrafo;
};