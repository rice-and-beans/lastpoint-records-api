import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarTurmaPorCodigoUseCase } from "./buscarTurmaPorCodigoUseCase";

const turmaRepositoryImpl = new TurmaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarTurmaPorCodigoUseCase = new BuscarTurmaPorCodigoUseCase(
    turmaRepositoryImpl,
    validaParamObrigatorios
);

export { buscarTurmaPorCodigoUseCase }