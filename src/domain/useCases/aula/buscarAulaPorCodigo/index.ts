import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarAulaPorCodigoUseCase } from "./buscarAulaPorCodigoUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarAulaPorCodigoUseCase = new BuscarAulaPorCodigoUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios
);

export { buscarAulaPorCodigoUseCase }