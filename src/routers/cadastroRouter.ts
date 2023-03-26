import { Router } from "express";
import * as cadastroController from "../controllers/cadastroController.js";
import { checkSchema } from "../middlewares/checkSchema.js";
import { novoCadastro, cadastro } from "../schemas/cadastroSchema.js";

const cadastroRouter = Router();

//rota para adicionar um novo cadastro
cadastroRouter.post('/cadastro', checkSchema(novoCadastro) ,cadastroController.inserirCadastro);

//rota para visualizar os cadastros 
cadastroRouter.get('/lista-de-cadastros', cadastroController.buscarCadastros);

//rota para deletar um cadastro
cadastroRouter.delete('/deletar/:id', cadastroController.deletarCadastro);

//rota para editar um cadatro
cadastroRouter.post('/editar', checkSchema(cadastro), cadastroController.editarCadastro);

export default cadastroRouter;