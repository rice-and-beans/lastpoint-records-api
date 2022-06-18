import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { RecuperaAulaAtualUseCase } from "./recuperaAulaAtualUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const recuperaAulaAtualUseCase = new RecuperaAulaAtualUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { recuperaAulaAtualUseCase }