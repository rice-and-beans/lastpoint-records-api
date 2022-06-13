import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { AtualizarTurmaUseCase } from "./atualizarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const atualizarTurmaUseCase = new AtualizarTurmaUseCase(
    turmaRepositoryImpl
);

export { atualizarTurmaUseCase }