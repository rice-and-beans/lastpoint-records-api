import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarUsuarioPorCodigoUseCase } from "./buscarUsuarioPorCodigoUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const buscarUsuarioPorCodigoUseCase = new BuscarUsuarioPorCodigoUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoExisteCodigo,
    
    
);

export { buscarUsuarioPorCodigoUseCase }