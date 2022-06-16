import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { CriarChamadaUseCase } from "./criarChamadaUseCase";
import { ValidaChamadaExiste } from "../../../validations/chamada/validaChamadaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const validaChamadaExiste = new ValidaChamadaExiste(
    chamadaRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarChamadaUseCase = new CriarChamadaUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios,
    validaChamadaExiste
);

export { criarChamadaUseCase }