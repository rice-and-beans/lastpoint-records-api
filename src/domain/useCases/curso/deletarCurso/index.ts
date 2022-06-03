import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { DeletarCursoUseCase } from "./deletarCursoUseCase";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const deletarCursoUseCase = new DeletarCursoUseCase(
    cursoRepositoryImpl
);

export { deletarCursoUseCase }