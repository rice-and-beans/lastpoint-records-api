import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { ValidaCursoExiste } from "../../../validations/curso/validaCursoExiste";
import { CriarCursoUseCase } from "./criarCursoUseCase";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const validaCursoExiste = new ValidaCursoExiste(
    cursoRepositoryImpl
);

const criarCursoUseCase = new CriarCursoUseCase(
    cursoRepositoryImpl,
    validaCursoExiste,
);

export { criarCursoUseCase }