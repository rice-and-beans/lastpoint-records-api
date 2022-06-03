import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { PesquisarCursoUseCase } from "./pesquisarCursoUseCase";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const pesquisarCursoUseCase = new PesquisarCursoUseCase(
    cursoRepositoryImpl
);

export { pesquisarCursoUseCase }