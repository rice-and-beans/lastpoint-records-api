import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";
import { AtualizarUsuarioUseCase } from "./atualizarUsuarioUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const atualizarUsuarioUseCase = new AtualizarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoEncontrado
);

export { atualizarUsuarioUseCase }