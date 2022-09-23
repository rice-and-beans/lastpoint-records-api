import { buscarChamadaPorCodigoUseCase } from "../../../domain/useCases/chamada/buscarChamadaPorCodigo";
import { BuscarChamadaPorCodigoController } from "./buscarChamadaPorCodigoController";

const buscarChamadaPorCodigoController = new BuscarChamadaPorCodigoController(
    buscarChamadaPorCodigoUseCase
);

export { buscarChamadaPorCodigoController }