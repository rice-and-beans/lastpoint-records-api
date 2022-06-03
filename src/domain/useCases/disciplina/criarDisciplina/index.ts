import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { CriarDisciplinaUseCase } from "./criarDisciplinaUseCase";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const criarDisciplinaUseCase = new CriarDisciplinaUseCase(
    disciplinaRepositoryImpl
);

export { criarDisciplinaUseCase }