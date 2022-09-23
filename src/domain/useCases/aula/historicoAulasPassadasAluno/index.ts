import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasPassadasAlunoUseCase } from "./historicoAulaPassadaAlunoUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios();

const historicoAulasPassadasAlunoUseCase = new HistoricoAulasPassadasAlunoUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoEncontrado
);

export { historicoAulasPassadasAlunoUseCase }