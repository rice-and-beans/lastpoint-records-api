import { buscarTurmaPorCodigoUseCase } from "../../../domain/useCases/turma/buscarTurmaPorCodigo";
import { BuscarTurmaPorCodigoController } from "./buscarTurmaPorCodigoController";

const buscarTurmaPorCodigoController = new BuscarTurmaPorCodigoController(
    buscarTurmaPorCodigoUseCase
);

export { buscarTurmaPorCodigoController }