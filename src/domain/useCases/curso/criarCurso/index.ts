import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { ValidaCursoExiste } from "../../../validations/curso/validaCursoExiste";
import { CriarCursoUseCase } from "./criarCursoUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const validaCursoExiste = new ValidaCursoExiste(
    cursoRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarCursoUseCase = new CriarCursoUseCase(
    cursoRepositoryImpl,
    validaParamObrigatorios,
    validaCursoExiste
);

export { criarCursoUseCase }