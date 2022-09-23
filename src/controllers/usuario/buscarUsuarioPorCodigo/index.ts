import { buscarUsuarioPorCodigoUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorCodigo";
import { BuscarUsuarioPorCodigoController } from "./buscarUsuarioPorCodigoController";

const buscarUsuarioPorCodigoController = new BuscarUsuarioPorCodigoController(
    buscarUsuarioPorCodigoUseCase
);

export { buscarUsuarioPorCodigoController }