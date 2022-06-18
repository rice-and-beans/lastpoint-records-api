import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarChamadaPorCodigoUseCase } from "./buscarChamadaPorCodigoUseCase";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarChamadaPorCodigoUseCase = new BuscarChamadaPorCodigoUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios
);

export { buscarChamadaPorCodigoUseCase }