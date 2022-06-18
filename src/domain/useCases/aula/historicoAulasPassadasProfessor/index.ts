import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasPassadasProfessorUseCase } from "./historicoAulaPassadaProfessorUseCase";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const historicoAulasPassadasProfessorUseCase = new HistoricoAulasPassadasProfessorUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado
);

export { historicoAulasPassadasProfessorUseCase }