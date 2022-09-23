import { criarCursoUseCase } from "../../../domain/useCases/curso/criarCurso";
import { CriarCursoController } from "./criarCursoController";

const criarCursoController = new CriarCursoController(
    criarCursoUseCase
);

export { criarCursoController }