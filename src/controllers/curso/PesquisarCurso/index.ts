import { pesquisarCursoUseCase } from "../../../domain/useCases/curso/pesquisarCurso";
import { PesquisarCursoController } from "./pesquisarCursoController";

const pesquisarCursoController = new PesquisarCursoController(
    pesquisarCursoUseCase
);

export { pesquisarCursoController }