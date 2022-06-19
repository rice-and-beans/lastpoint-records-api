import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarUsuarioPorEmailUseCase } from "./buscarUsuarioPorEmailUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();
const validaParamObrigatorios = new ValidaParamObrigatorios();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const buscarUsuarioPorEmail = new BuscarUsuarioPorEmailUseCase(
    usuarioRepositoryImpl,
    validaUsuarioNaoEncontrado,
    validaParamObrigatorios
);

export { buscarUsuarioPorEmail }