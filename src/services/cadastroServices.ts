import { NovoCadastro } from "../types/cadastroTypes.js";
import * as cadastroServices from "../repositories/cadastroRepository.js";

async function inserirCadastro(cadastro: NovoCadastro){
    return await cadastroServices.inserirElemento(cadastro);
}

async function buscarCadastros() {
    return (await cadastroServices.buscarElementos()).rows;
}

async function buscarCadastroPorId(id: number) {
    return (await cadastroServices.buscarElementoPorId(id)).rows;    
}

async function deletarCadastro(id: number){
    return await cadastroServices.deletarElemento(id);
}

async function editarCadastro(id: number){
    return;
}

export {
    inserirCadastro,
    buscarCadastros,
    buscarCadastroPorId,
    deletarCadastro,
    editarCadastro,
}