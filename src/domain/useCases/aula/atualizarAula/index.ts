import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { AtualizarAulaUseCase } from "./atualizarAulaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);   

const atualizarAulaUseCase = new AtualizarAulaUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaNaoEncontrado
);

export { atualizarAulaUseCase }