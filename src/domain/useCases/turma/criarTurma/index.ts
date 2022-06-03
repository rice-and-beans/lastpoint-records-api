import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepository";
import { CriarTurmaUseCase } from "./criarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();


const criarTurmaUseCase = new CriarTurmaUseCase(
    turmaRepositoryImpl
);

export { criarTurmaUseCase }