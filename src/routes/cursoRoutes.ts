import { Router } from "express";
import { criarCursoController } from "../controllers/curso/criarCurso";
import { atualizarCursoController } from "../controllers/curso/atualizarCurso";
import { deletarCursoController } from "../controllers/curso/deletarCurso";
import { pesquisarCursoController } from "../controllers/curso/pesquisarCurso";
import { buscarCursoPorCodigoController } from "../controllers/curso/buscarCursoPorCodigo";

const router = Router();

router.post('/', async (request, response) => {
    return await criarCursoController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarCursoController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarCursoController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarCursoController.handle(request, response);
});

router.get('/codigo', async (request, response) => {
    return await buscarCursoPorCodigoController.handle(request, response);
});

export { router as curso };