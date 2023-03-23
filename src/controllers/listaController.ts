import { Request, Response } from "express";

async function getLista(req: Request, res: Response) {
    return res.status(200).send('get lista ok');
}

export {
    getLista
}