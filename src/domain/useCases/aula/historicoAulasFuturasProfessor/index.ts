import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasFuturasProfessorUseCase } from "./historicoAulasFuturasProfessorUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const historicoAulasFuturasProfessorUseCase = new HistoricoAulasFuturasProfessorUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { historicoAulasFuturasProfessorUseCase }