import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasPassadasAlunoUseCase } from "./historicoAulaPassadaAlunoUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const historicoAulasPassadasAlunoUseCase = new HistoricoAulasPassadasAlunoUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { historicoAulasPassadasAlunoUseCase }