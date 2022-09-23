import { Router } from "express";
import { criarAulaController } from "../controllers/aula/criarAula";
import { atualizarAulaController } from "../controllers/aula/atualizarAula";
import { atualizarAulaTokenController } from "../controllers/aula/atualizarAulaToken";
import { deletarAulaController } from "../controllers/aula/deletarAula";
import { pesquisarAulaController } from "../controllers/aula/pesquisarAula";
import { historicoAulasFuturasProfessorController } from "../controllers/aula/historicoAulasFuturasProfessor";
import { historicoAulasFuturasAlunoController } from "../controllers/aula/historicoAulasFuturasAluno";
import { historicoAulasPassadasAlunoController } from "../controllers/aula/historicoAulasPassadasAluno";
import { historicoAulasPassadasProfessorController } from "../controllers/aula/historicoAulasPassadasProfessor";
import { buscarAulaPorCodigoController } from "../controllers/aula/buscarAulaPorCodigo";
import { recuperaAulaProfessorAtualController } from "../controllers/aula/recuperaAulaAtualProfessor";
import { recuperaAulaAlunoAtualController } from "../controllers/aula/recuperaAulaAlunoAtual";

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

router.get('/HistoricoAulasFuturasProfessor', async (request, response) => {
    return await historicoAulasFuturasProfessorController.handle(request, response);
});

router.get('/HistoricoAulasFuturasAluno', async (request, response) => {
    return await historicoAulasFuturasAlunoController.handle(request, response);
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

router.get('/recuperaAulaProfessorAtual', async (request, response) => {
    return await recuperaAulaProfessorAtualController.handle(request, response);
});

router.get('/recuperaAulaAlunoAtual', async (request, response) => {
    return await recuperaAulaAlunoAtualController.handle(request, response);
});

export { router as aula };