import app from "../app.js";
import supertest from "supertest";

const agent = supertest(app);

const body = {
    doc: "00000000000",
    contato: "Beltrano Souza",
    nomeFantasia: "Bel's Mercearia",
    telefoneContato: "+552198765432",
    razaoSocial: "Beltrano MERC LTDA",
    emailContato: "beltrano@email.com",
    endereco: "Estrada da Rua da Cida",
    bairro: "Parque Jacareí",
    cidade: "São João do Rio Preto",
    uf: "PE",
    cep: "25766000"
  }

describe(`
    TESTE: Adição de cadastro ao banco de dados.
    ROTA: '/cadastro'
    MÉTODO: POST
`, () => {

    it(`
        CENÁRIO: Um novo cadastro é adicionado com sucesso.
        EXPECTATIVA: Deve retornar status 201 e a mensagem "Cadastro adicionado com sucesso."
    `, async () => {        
        const resultado = await agent.post('/cadastro').send(body);
        expect(resultado.statusCode).toBe(201);
    });
})

describe(`
    TESTE: Visualização de cadastros.
    ROTA: '/lista-de-cadastros'
    MÉTODO: GET
`, () => {
    it(`
        CENÁRIO: Buscar a lista de cadastros do sistema.
        EXPECTATIVA: Deve retornar status 200 e uma lista de cadastros.
    `, async () => {
        const resultado = await agent.get('/lista-de-cadastros');
        expect(resultado.statusCode).toBe(200);
    })
})
