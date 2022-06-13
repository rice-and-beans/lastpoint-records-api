import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { PesquisarTurmaUseCase } from "./pesquisarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const pesquisarTurmaUseCase = new PesquisarTurmaUseCase(
    turmaRepositoryImpl
);

export { pesquisarTurmaUseCase }