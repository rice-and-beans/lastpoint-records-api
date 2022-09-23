import { criarTurmaUseCase } from "../../../domain/useCases/turma/criarTurma";
import { CriarTurmaController } from "./criarTurmaController";

const criarTurmaController = new CriarTurmaController(
    criarTurmaUseCase
);

export { criarTurmaController }