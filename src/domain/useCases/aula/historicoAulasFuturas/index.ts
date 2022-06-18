import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasFuturasUseCase } from "./historicoAulaFuturaUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const historicoAulasFuturasUseCase = new HistoricoAulasFuturasUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { historicoAulasFuturasUseCase }