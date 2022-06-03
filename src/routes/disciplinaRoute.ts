import { Router } from "express";
import { criarDisciplinaController } from "../controllers/disciplina/criarDisciplina";
import { atualizarDisciplinaController } from "../controllers/disciplina/atualizarDisciplina";
import { deletarDisciplinaController } from "../controllers/disciplina/deletarDisciplina";
import { pesquisarDisciplinaController } from "../controllers/disciplina/PesquisarDisciplina";

const router = Router();

router.post('/', async (request, response) => {
    return await criarDisciplinaController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarDisciplinaController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarDisciplinaController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarDisciplinaController.handle(request, response);
});

export { router as disciplina };