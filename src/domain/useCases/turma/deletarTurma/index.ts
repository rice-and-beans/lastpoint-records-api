import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepository";
import { DeletarTurmaUseCase } from "./deletarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const deletarTurmaUseCase = new DeletarTurmaUseCase(
    turmaRepositoryImpl
);

export { deletarTurmaUseCase }