import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";
import { atualizarUsuarioController } from "../controllers/usuario/atualizarUsuario";
import { deletarUsuarioController } from "../controllers/usuario/deletarUsuario";
import { pesquisarUsuarioController } from "../controllers/usuario/pesquisarUsuario";
import { buscarUsuarioPorEmailController } from "../controllers/usuario/buscarUsuarioPorEmail";
import { buscarUsuarioPorCodigoController } from "../controllers/usuario/buscarUsuarioPorCodigo";

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

router.get('/email', async (request, response) => {
    return await buscarUsuarioPorEmailController.handle(request, response);
});

router.get('/codigo', async (request, response) => {
    return await buscarUsuarioPorCodigoController.handle(request, response);
});

export { router as usuario };