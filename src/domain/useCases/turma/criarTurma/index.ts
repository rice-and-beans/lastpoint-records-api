import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { CriarTurmaUseCase } from "./criarTurmaUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();


const criarTurmaUseCase = new CriarTurmaUseCase(
    turmaRepositoryImpl
);

export { criarTurmaUseCase }