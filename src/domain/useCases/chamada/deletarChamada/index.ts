import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { DeletarChamadaUseCase } from "./deletarChamadaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaChamadaNaoEncontrado } from "../../../validations/chamada/validaChamadaNaoEncontrado";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validachamadaNaoEncontrado = new ValidaChamadaNaoEncontrado(
    chamadaRepositoryImpl
);    

const deletarChamadaUseCase = new DeletarChamadaUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios,
    validachamadaNaoEncontrado
);

export { deletarChamadaUseCase }