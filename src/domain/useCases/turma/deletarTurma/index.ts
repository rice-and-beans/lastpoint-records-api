import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { DeletarTurmaUseCase } from "./deletarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const deletarTurmaUseCase = new DeletarTurmaUseCase(
    turmaRepositoryImpl
);

export { deletarTurmaUseCase }