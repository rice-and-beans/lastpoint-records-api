import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { PesquisarUsuarioUseCase } from "./pesquisarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const pesquisarUsuarioUseCase = new PesquisarUsuarioUseCase(
    usuarioRepositoryImpl
);

export { pesquisarUsuarioUseCase }