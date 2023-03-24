import { query } from "express";
import database from "../database.js";
import { NovoCadastro } from "../types/cadastroTypes.js";

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

async function editarElemento(id: number) {
    return;
}

export {
    inserirElemento,
    buscarElementos,
    buscarElementoPorId,
    deletarElemento,
    editarElemento
}