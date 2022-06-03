import { deletarCursoUseCase } from "../../../domain/useCases/curso/deletarCurso";
import { DeletarCursoController } from "./deletarCursoController";

const deletarCursoController = new DeletarCursoController(
    deletarCursoUseCase
);

export { deletarCursoController }