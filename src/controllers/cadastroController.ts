import { Request, Response } from "express";
import * as cadastroServices from "../services/cadastroServices.js";

async function inserirCadastro(req: Request, res:Response) {
    const body = req.body;
    await cadastroServices.inserirCadastro(body);
    return res.status(201).send('inserir cadastro ok')
}

async function buscarCadastros(req: Request, res:Response){
    const cadastros = await cadastroServices.buscarCadastros();
    return res.status(200).send(cadastros);
}

async function deletarCadastro(req: Request, res:Response) {
    const {id} = req.params;

    await cadastroServices.deletarCadastro(+id);

    return res.status(202).send(`Cadastro de id ${id} apagado com sucesso.`)
}

async function editarCadastro(req: Request, res: Response) {
    const body = req.body;

    await cadastroServices.editarCadastro(body);

    const cadastroEditado = await cadastroServices.buscarCadastroPorId(body.id);

    return res.status(202).send(cadastroEditado);
}

export {
    inserirCadastro,
    buscarCadastros,
    deletarCadastro,
    editarCadastro
}