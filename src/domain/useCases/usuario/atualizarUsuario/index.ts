import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioExiste } from "../../../validations/usuario/validaUsuarioExiste";
import { AtualizarUsuarioUseCase } from "./atualizarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const atualizarUsuarioUseCase = new AtualizarUsuarioUseCase(
    usuarioRepositoryImpl
);

export { atualizarUsuarioUseCase }