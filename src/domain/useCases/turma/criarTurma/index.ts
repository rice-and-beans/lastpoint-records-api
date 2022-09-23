import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { CriarTurmaUseCase } from "./criarTurmaUseCase";
import { ValidaTurmaExiste } from "../../../validations/turma/validaTurmaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const validaTurmaExiste = new ValidaTurmaExiste(
    turmaRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarTurmaUseCase = new CriarTurmaUseCase(
    turmaRepositoryImpl,
    validaParamObrigatorios,
    validaTurmaExiste
);

export { criarTurmaUseCase }