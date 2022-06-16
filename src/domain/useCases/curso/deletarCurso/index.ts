import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { DeletarCursoUseCase } from "./deletarCursoUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaCursoNaoEncontrado } from "../../../validations/curso/validaCursoNaoEncontrado";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validacursoNaoEncontrado = new ValidaCursoNaoEncontrado(
    cursoRepositoryImpl
);

const deletarCursoUseCase = new DeletarCursoUseCase(
    cursoRepositoryImpl,
    validaParamObrigatorios,
    validacursoNaoEncontrado
);

export { deletarCursoUseCase }