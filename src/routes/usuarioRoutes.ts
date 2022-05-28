import { Router } from "express";
import { criarUsuarioController } from "../controllers/usuario/criarUsuario";

const router = Router();

router.post('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.get('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.put('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

router.delete('/', async (request, response) => {
    return await criarUsuarioController.handle(request, response);
});

export { router as usuario };