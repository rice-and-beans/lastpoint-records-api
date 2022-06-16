import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { CriarAulaUseCase } from "./criarAulaUseCase";
import { ValidaAulaExiste } from "../../../validations/aula/validaAulaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaAulaExiste = new ValidaAulaExiste(
    aulaRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarAulaUseCase = new CriarAulaUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaExiste
);

export { criarAulaUseCase }