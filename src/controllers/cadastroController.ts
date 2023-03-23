import { Request, Response } from "express";

async function inserirCadastro(req: Request, res:Response) {
    const body = req.body;
    return res.status(201).send('inserir cadastro ok')
}

async function buscarCadastros(req: Request, res:Response){
    return res.status(200).send('buscar cadastros ok')
}

export {
    inserirCadastro,
    buscarCadastros
}