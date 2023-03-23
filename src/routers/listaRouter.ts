import { Router } from "express";
import * as listaController from "../controllers/listaController.js";

const listaRouter = Router();

listaRouter.get('/lista', listaController.getLista);

export default listaRouter