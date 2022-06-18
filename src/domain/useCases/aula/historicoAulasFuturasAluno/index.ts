import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasFuturasAlunoUseCase } from "./historicoAulasFuturasAlunoUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const historicoAulasFuturasAlunoUseCase = new HistoricoAulasFuturasAlunoUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { historicoAulasFuturasAlunoUseCase }