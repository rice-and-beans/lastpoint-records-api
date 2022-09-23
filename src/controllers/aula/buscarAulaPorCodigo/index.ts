import { buscarAulaPorCodigoUseCase } from "../../../domain/useCases/aula/buscarAulaPorCodigo";
import { BuscarAulaPorCodigoController } from "./buscarAulaPorCodigoController";

const buscarAulaPorCodigoController = new BuscarAulaPorCodigoController(
    buscarAulaPorCodigoUseCase
);

export { buscarAulaPorCodigoController }