import { Router } from "express";
import { criarAulaController } from "../controllers/aula/criarAula";
import { atualizarAulaController } from "../controllers/aula/atualizarAula";
import { atualizarAulaTokenController } from "../controllers/aula/atualizarAulaToken";
import { deletarAulaController } from "../controllers/aula/deletarAula";
import { pesquisarAulaController } from "../controllers/aula/PesquisarAula";
import { historicoAulasFuturasController } from "../controllers/aula/historicoAulasFuturas";
import { historicoAulasPassadasAlunoController } from "../controllers/aula/historicoAulasPassadasAluno";
import { historicoAulasPassadasProfessorController } from "../controllers/aula/historicoAulasPassadasProfessor";
import { buscarAulaPorCodigoController } from "../controllers/aula/buscarAulaPorCodigo";
import { recuperaAulaAtualController } from "../controllers/aula/recuperaAulaAtual";

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

router.put('/token', async (request, response) => {
    return await atualizarAulaTokenController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarAulaController.handle(request, response);
});

router.get('/HistoricoAulasFuturas', async (request, response) => {
    return await historicoAulasFuturasController.handle(request, response);
});

router.get('/HistoricoAulasPassadasAluno', async (request, response) => {
    return await historicoAulasPassadasAlunoController.handle(request, response);
});

router.get('/HistoricoAulasPassadasProfessor', async (request, response) => {
    return await historicoAulasPassadasProfessorController.handle(request, response);
});

router.get('/codigo', async (request, response) => {
    return await buscarAulaPorCodigoController.handle(request, response);
});

router.get('/recuperaAulaAtual', async (request, response) => {
    return await recuperaAulaAtualController.handle(request, response);
});

export { router as aula };