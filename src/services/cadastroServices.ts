import { Cadastro, NovoCadastro } from "../types/cadastroTypes.js";
import * as cadastroRepository from "../repositories/cadastroRepository.js";

async function inserirCadastro(cadastro: NovoCadastro){
    return await cadastroRepository.inserirElemento(cadastro);
}

async function buscarCadastros() {
    return (await cadastroRepository.buscarElementos()).rows;
}

async function buscarCadastroPorId(id: number) {
    return (await cadastroRepository.buscarElementoPorId(id)).rows;    
}

async function deletarCadastro(id: number){
    return await cadastroRepository.deletarElemento(id);
}

async function editarCadastro(body: Cadastro){
    return await cadastroRepository.editarElemento(body);
}

export {
    inserirCadastro,
    buscarCadastros,
    buscarCadastroPorId,
    deletarCadastro,
    editarCadastro,
}