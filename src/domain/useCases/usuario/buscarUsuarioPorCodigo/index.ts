import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarUsuarioPorCodigoUseCase } from "./buscarUsuarioPorCodigoUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarUsuarioPorCodigoUseCase = new BuscarUsuarioPorCodigoUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios
);

export { buscarUsuarioPorCodigoUseCase }