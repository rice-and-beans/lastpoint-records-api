import { buscarCursoPorCodigoUseCase } from "../../../domain/useCases/curso/buscarCursoPorCodigo";
import { BuscarCursoPorCodigoController } from "./buscarCursoPorCodigoController";

const buscarCursoPorCodigoController = new BuscarCursoPorCodigoController(
    buscarCursoPorCodigoUseCase
);

export { buscarCursoPorCodigoController }