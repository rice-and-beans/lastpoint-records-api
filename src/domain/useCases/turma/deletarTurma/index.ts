import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { DeletarTurmaUseCase } from "./deletarTurmaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaTurmaNaoEncontrado } from "../../../validations/turma/validaTurmaNaoEncontrado";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaturmaNaoEncontrado = new ValidaTurmaNaoEncontrado(
    turmaRepositoryImpl
);

const deletarTurmaUseCase = new DeletarTurmaUseCase(
    turmaRepositoryImpl,
    validaParamObrigatorios,
    validaturmaNaoEncontrado
);

export { deletarTurmaUseCase }