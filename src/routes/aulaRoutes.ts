import { Router } from "express";
import { criarAulaController } from "../controllers/aula/criarAula";
import { atualizarAulaController } from "../controllers/aula/atualizarAula";
import { deletarAulaController } from "../controllers/aula/deletarAula";
import { pesquisarAulaController } from "../controllers/aula/PesquisarAula";

const router = Router();

router.post('/', async (request, response) => {
    return await criarAulaController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarAulaController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarAulaController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarAulaController.handle(request, response);
});

export { router as aula };