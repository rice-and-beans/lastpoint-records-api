import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { DeletarAulaUseCase } from "./deletarAulaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);   

const deletarAulaUseCase = new DeletarAulaUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaNaoEncontrado
);

export { deletarAulaUseCase }