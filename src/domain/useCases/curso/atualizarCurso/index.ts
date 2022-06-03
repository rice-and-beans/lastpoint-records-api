import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { AtualizarCursoUseCase } from "./atualizarCursoUseCase";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const atualizarCursoUseCase = new AtualizarCursoUseCase(
    cursoRepositoryImpl
);

export { atualizarCursoUseCase }