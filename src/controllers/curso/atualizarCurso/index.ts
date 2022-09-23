import { atualizarCursoUseCase } from "../../../domain/useCases/curso/atualizarCurso";
import { AtualizarCursoController } from "./atualizarCursoController";

const atualizarCursoController = new AtualizarCursoController(
    atualizarCursoUseCase
);

export { atualizarCursoController }