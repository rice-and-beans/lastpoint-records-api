import { criarDisciplinaUseCase } from "../../../domain/useCases/disciplina/criarDisciplina";
import { CriarDisciplinaController } from "./criarDisciplinaController";

const criarDisciplinaController = new CriarDisciplinaController(
    criarDisciplinaUseCase
);

export { criarDisciplinaController }