import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { AtualizarTurmaUseCase } from "./atualizarTurmaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaTurmaNaoEncontrado } from "../../../validations/turma/validaTurmaNaoEncontrado";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaturmaNaoEncontrado = new ValidaTurmaNaoEncontrado(
    turmaRepositoryImpl
);

const atualizarTurmaUseCase = new AtualizarTurmaUseCase(
    turmaRepositoryImpl,
    validaParamObrigatorios,
    validaturmaNaoEncontrado
);

export { atualizarTurmaUseCase }