import { Router } from "express";
import cadastroRouter from "./cadastroRouter.js";

const router = Router();
router.use(cadastroRouter);

export default router