import { atualizarTurmaUseCase } from "../../../domain/useCases/turma/atualizarTurma";
import { AtualizarTurmaController } from "./atualizarTurmaController";

const atualizarTurmaController = new AtualizarTurmaController(
    atualizarTurmaUseCase
);

export { atualizarTurmaController }