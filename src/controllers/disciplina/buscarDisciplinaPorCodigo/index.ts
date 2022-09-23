import { buscarDisciplinaPorCodigoUseCase } from "../../../domain/useCases/disciplina/buscarDisciplinaPorCodigo";
import { BuscarDisciplinaPorCodigoController } from "./buscarDisciplinaPorCodigoController";

const buscarDisciplinaPorCodigoController = new BuscarDisciplinaPorCodigoController(
    buscarDisciplinaPorCodigoUseCase
);

export { buscarDisciplinaPorCodigoController }