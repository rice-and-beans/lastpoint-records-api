import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarDisciplinaPorCodigoUseCase } from "./buscarDisciplinaPorCodigoUseCase";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarDisciplinaPorCodigoUseCase = new BuscarDisciplinaPorCodigoUseCase(
    disciplinaRepositoryImpl,
    validaParamObrigatorios
);

export { buscarDisciplinaPorCodigoUseCase }