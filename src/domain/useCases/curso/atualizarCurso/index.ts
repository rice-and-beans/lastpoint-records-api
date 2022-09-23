import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { AtualizarCursoUseCase } from "./atualizarCursoUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaCursoNaoEncontrado } from "../../../validations/curso/validaCursoNaoEncontrado";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validacursoNaoEncontrado = new ValidaCursoNaoEncontrado(
    cursoRepositoryImpl
);

const atualizarCursoUseCase = new AtualizarCursoUseCase(
    cursoRepositoryImpl,
    validaParamObrigatorios,
    validacursoNaoEncontrado
);

export { atualizarCursoUseCase }