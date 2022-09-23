import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { PesquisarDisciplinaUseCase } from "./pesquisarDisciplinaUseCase";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const pesquisarDisciplinaUseCase = new PesquisarDisciplinaUseCase(
    disciplinaRepositoryImpl
);

export { pesquisarDisciplinaUseCase }