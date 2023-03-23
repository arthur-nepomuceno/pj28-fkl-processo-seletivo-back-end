import { Router } from "express";
import * as cadastroController from "../controllers/cadastroController.js";
import { checkSchema } from "../middlewares/checkSchema.js";
import { novoCadastro } from "../schemas/cadastroSchema.js";

const cadastroRouter = Router();
cadastroRouter.post('/cadastro', checkSchema(novoCadastro) ,cadastroController.inserirCadastro);
cadastroRouter.get('/lista-de-cadastros', cadastroController.buscarCadastros);

export default cadastroRouter;