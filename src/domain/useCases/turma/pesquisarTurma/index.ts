import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepository";
import { PesquisarTurmaUseCase } from "./pesquisarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const pesquisarTurmaUseCase = new PesquisarTurmaUseCase(
    turmaRepositoryImpl
);

export { pesquisarTurmaUseCase }