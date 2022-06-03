import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepository";
import { AtualizarTurmaUseCase } from "./atualizarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const atualizarTurmaUseCase = new AtualizarTurmaUseCase(
    turmaRepositoryImpl
);

export { atualizarTurmaUseCase }