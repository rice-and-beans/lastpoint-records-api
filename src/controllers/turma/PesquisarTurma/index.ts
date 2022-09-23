import { pesquisarTurmaUseCase } from "../../../domain/useCases/turma/pesquisarTurma";
import { PesquisarTurmaController } from "./pesquisarTurmaController";

const pesquisarTurmaController = new PesquisarTurmaController(
    pesquisarTurmaUseCase
);

export { pesquisarTurmaController }