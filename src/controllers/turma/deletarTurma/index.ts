import { deletarTurmaUseCase } from "../../../domain/useCases/turma/deletarTurma";
import { DeletarTurmaController } from "./deletarTurmaController";

const deletarTurmaController = new DeletarTurmaController(
    deletarTurmaUseCase
);

export { deletarTurmaController }