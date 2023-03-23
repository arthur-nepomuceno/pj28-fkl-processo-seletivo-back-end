import { Router } from "express";
import listaRouter from "./listaRouter.js";
import cadastroRouter from "./cadastroRouter.js";

const router = Router();
router.use(listaRouter);
router.use(cadastroRouter);

export default router