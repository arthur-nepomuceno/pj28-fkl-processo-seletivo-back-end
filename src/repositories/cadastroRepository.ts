import database from "../database.js";
import { Cadastro, NovoCadastro } from "../types/cadastroTypes.js";

async function inserirElemento(elemento: NovoCadastro) {
    const {
        doc,
        contato,
        nomeFantasia,
        telefoneContato,
        razaoSocial,
        emailContato,
        endereco,
        bairro,
        cidade,
        uf,
        cep
    } = elemento;

    return database.query(`
        INSERT INTO cadastros(
            doc,
            contato,
            "nomeFantasia",
            "telefoneContato",
            "razaoSocial",
            "emailContato",
            endereco,
            bairro,
            cidade,
            uf,
            cep
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    `, [
        doc,
        contato,
        nomeFantasia,
        telefoneContato,
        razaoSocial,
        emailContato,
        endereco,
        bairro,
        cidade,
        uf,
        cep
    ]);
}

async function buscarElementos() {
    return await database.query(`SELECT * FROM cadastros`);
}

async function buscarElementoPorId(id: number) {
    return await database.query(`SELECT * FROM cadastros WHERE id=$1`, [id]);
}

async function deletarElemento(id: number) {
    return await database.query(`DELETE FROM cadastros WHERE id=$1`, [id]);
}

async function editarElemento(elemento: Cadastro) {
    const {
        id,
        doc,
        contato,
        nomeFantasia,
        telefoneContato,
        razaoSocial,
        emailContato,
        endereco,
        bairro,
        cidade,
        uf,
        cep
    } = elemento;

    return database.query(`
        UPDATE cadastros
        SET doc = $1,
            contato = $2,
            "nomeFantasia" = $3,
            "telefoneContato" = $4,
            "razaoSocial" = $5,
            "emailContato" = $6,
            endereco = $7,
            bairro = $8,
            cidade = $9,
            uf = $10,
            cep = $11
        WHERE id = $12
    `, [
        doc,
        contato,
        nomeFantasia,
        telefoneContato,
        razaoSocial,
        emailContato,
        endereco,
        bairro,
        cidade,
        uf,
        cep,
        id
    ]);
}

export {
    inserirElemento,
    buscarElementos,
    buscarElementoPorId,
    deletarElemento,
    editarElemento
}