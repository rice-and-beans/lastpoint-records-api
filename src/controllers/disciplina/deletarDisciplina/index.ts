import { deletarDisciplinaUseCase } from "../../../domain/useCases/disciplina/deletarDisciplina";
import { DeletarDisciplinaController } from "./deletarDisciplinaController";

const deletarDisciplinaController = new DeletarDisciplinaController(
    deletarDisciplinaUseCase
);

export { deletarDisciplinaController }