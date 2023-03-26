import {faker} from "@faker-js/faker";

const newUser = {
    doc: faker.datatype.string(),
    contato:  faker.datatype.string(),
    nomeFantasia:  faker.datatype.string(),
    telefoneContato: faker.datatype.number(),
    razaoSocial: faker.datatype.string(),
    emailContato: faker.internet.email(),
    endereco: faker.datatype.string(),
    bairro:  faker.datatype.string(),
    cidade:  faker.datatype.string(),
    uf: faker.datatype.string(),
    cep: faker.datatype.number({min: 11111111, max: 99999999})
}

export {
    newUser
}