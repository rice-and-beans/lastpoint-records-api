import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { CriarDisciplinaUseCase } from "./criarDisciplinaUseCase";
import { ValidaDisciplinaExiste } from "../../../validations/disciplina/validaDisciplinaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();

const validaDisciplinaExiste = new ValidaDisciplinaExiste(
    disciplinaRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);


const criarDisciplinaUseCase = new CriarDisciplinaUseCase(
    disciplinaRepositoryImpl,
    validaParamObrigatorios,
    validaDisciplinaExiste
);

export { criarDisciplinaUseCase }