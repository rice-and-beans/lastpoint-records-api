import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { AtualizarChamadaUseCase } from "./atualizarChamadaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaChamadaNaoEncontrado } from "../../../validations/chamada/validaChamadaNaoEncontrado";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validachamadaNaoEncontrado = new ValidaChamadaNaoEncontrado(
    chamadaRepositoryImpl
);

const atualizarChamadaUseCase = new AtualizarChamadaUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios,
    validachamadaNaoEncontrado
);

export { atualizarChamadaUseCase }