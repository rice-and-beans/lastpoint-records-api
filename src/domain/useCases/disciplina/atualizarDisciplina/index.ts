import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { AtualizarDisciplinaUseCase } from "./atualizarDisciplinaUseCase";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const atualizarDisciplinaUseCase = new AtualizarDisciplinaUseCase(
    disciplinaRepositoryImpl
);

export { atualizarDisciplinaUseCase }