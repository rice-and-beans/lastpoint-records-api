import { Router } from "express";
import { criarChamadaController } from "../controllers/chamada/criarChamada";
import { atualizarChamadaController } from "../controllers/chamada/atualizarChamada";
import { deletarChamadaController } from "../controllers/chamada/deletarChamada";
import { pesquisarChamadaController } from "../controllers/chamada/PesquisarChamada";

const router = Router();

router.post('/', async (request, response) => {
    return await criarChamadaController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarChamadaController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarChamadaController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarChamadaController.handle(request, response);
});

export { router as chamada };