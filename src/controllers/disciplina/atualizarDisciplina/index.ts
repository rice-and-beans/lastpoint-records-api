import { atualizarDisciplinaUseCase } from "../../../domain/useCases/disciplina/atualizarDisciplina";
import { AtualizarDisciplinaController } from "./atualizarDisciplinaController";

const atualizarDisciplinaController = new AtualizarDisciplinaController(
    atualizarDisciplinaUseCase
);

export { atualizarDisciplinaController }