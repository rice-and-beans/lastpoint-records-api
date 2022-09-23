import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { AtualizarDisciplinaUseCase } from "./atualizarDisciplinaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaDisciplinaNaoEncontrado } from "../../../validations/disciplina/validaDisciplinaNaoEncontrado";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaturmaNaoEncontrado = new ValidaDisciplinaNaoEncontrado(
    disciplinaRepositoryImpl
);

const atualizarDisciplinaUseCase = new AtualizarDisciplinaUseCase(
    disciplinaRepositoryImpl,
    validaParamObrigatorios,
    validaturmaNaoEncontrado
);

export { atualizarDisciplinaUseCase }