import { pesquisarDisciplinaUseCase } from "../../../domain/useCases/disciplina/pesquisarDisciplina";
import { PesquisarDisciplinaController } from "./pesquisarDisciplinaController";

const pesquisarDisciplinaController = new PesquisarDisciplinaController(
    pesquisarDisciplinaUseCase
);

export { pesquisarDisciplinaController }