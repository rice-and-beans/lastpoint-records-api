import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { DeletarUsuarioUseCase } from "./deletarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const deletarUsuarioUseCase = new DeletarUsuarioUseCase(
    usuarioRepositoryImpl
);

export { deletarUsuarioUseCase }