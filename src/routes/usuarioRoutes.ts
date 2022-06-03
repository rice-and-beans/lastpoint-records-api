import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";
import { atualizarUsuarioController } from "../controllers/usuario/atualizarUsuario";
import { deletarUsuarioController } from "../controllers/usuario/deletarUsuario";
import { pesquisarUsuarioController } from "../controllers/usuario/PesquisarUsuario";

const router = Router();

router.post('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await pesquisarUsuarioController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await atualizarUsuarioController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await deletarUsuarioController.handle(request, response);
});

export { router as usuario };