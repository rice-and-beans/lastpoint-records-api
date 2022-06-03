import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { DeletarDisciplinaUseCase } from "./deletarDisciplinaUseCase";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const deletarDisciplinaUseCase = new DeletarDisciplinaUseCase(
    disciplinaRepositoryImpl
);

export { deletarDisciplinaUseCase }