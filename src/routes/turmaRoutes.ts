import { Router } from "express";
import { criarTurmaController } from "../controllers/turma/criarTurma";
import { atualizarTurmaController } from "../controllers/turma/atualizarTurma";
import { deletarTurmaController } from "../controllers/turma/deletarTurma";
import { pesquisarTurmaController } from "../controllers/turma/pesquisarTurma";
import { buscarTurmaPorCodigoController } from "../controllers/turma/buscarTurmaPorCodigo";

const router = Router();

router.post('/', async (request, response) => {
    return await criarTurmaController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarTurmaController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarTurmaController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarTurmaController.handle(request, response);
});

router.get('/codigo', async (request, response) => {
    return await buscarTurmaPorCodigoController.handle(request, response);
});

export { router as turma };