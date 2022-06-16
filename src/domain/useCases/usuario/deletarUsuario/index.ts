import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { DeletarUsuarioUseCase } from "./deletarUsuarioUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const deletarUsuarioUseCase = new DeletarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoEncontrado
);

export { deletarUsuarioUseCase }