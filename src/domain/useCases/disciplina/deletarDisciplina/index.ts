import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { DeletarDisciplinaUseCase } from "./deletarDisciplinaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaDisciplinaNaoEncontrado } from "../../../validations/disciplina/validaDisciplinaNaoEncontrado";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaturmaNaoEncontrado = new ValidaDisciplinaNaoEncontrado(
    disciplinaRepositoryImpl
);

const deletarDisciplinaUseCase = new DeletarDisciplinaUseCase(
    disciplinaRepositoryImpl,
    validaParamObrigatorios,
    validaturmaNaoEncontrado
);

export { deletarDisciplinaUseCase }