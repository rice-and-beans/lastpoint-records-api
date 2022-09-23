import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { AtualizarAulaTokenUseCase } from "./atualizarAulaTokenUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);   

const atualizarAulaTokenUseCase = new AtualizarAulaTokenUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaNaoEncontrado
);

export { atualizarAulaTokenUseCase }