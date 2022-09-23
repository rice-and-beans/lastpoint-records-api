import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasPassadasProfessorUseCase } from "./historicoAulaPassadaProfessorUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios();

const historicoAulasPassadasProfessorUseCase = new HistoricoAulasPassadasProfessorUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoEncontrado
);

export { historicoAulasPassadasProfessorUseCase }