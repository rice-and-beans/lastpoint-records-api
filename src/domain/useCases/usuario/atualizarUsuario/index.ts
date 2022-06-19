import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { AtualizarUsuarioUseCase } from "./atualizarUsuarioUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const atualizarUsuarioUseCase = new AtualizarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoExisteCodigo
);

export { atualizarUsuarioUseCase }