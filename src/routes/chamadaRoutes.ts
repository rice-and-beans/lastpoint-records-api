import { Router } from "express";
import { criarChamadaController } from "../controllers/chamada/criarChamada";
import { atualizarChamadaController } from "../controllers/chamada/atualizarChamada";
import { deletarChamadaController } from "../controllers/chamada/deletarChamada";
import { pesquisarChamadaController } from "../controllers/chamada/pesquisarChamada";
import { buscarChamadaPorCodigoController } from "../controllers/chamada/buscarChamadaPorCodigo";
import { recuperaChamadaJafeitaController } from "../controllers/chamada/recuperaChamadaJafeita";

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

router.get('/codigo', async (request, response) => {
    return await buscarChamadaPorCodigoController.handle(request, response);
});

router.get('/recuperaChamadaJaFeita', async (request, response) => {
    return await recuperaChamadaJafeitaController.handle(request, response);
}); 

export { router as chamada };