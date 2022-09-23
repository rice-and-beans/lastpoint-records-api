import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { HistoricoAulasFuturasAlunoUseCase } from "./historicoAulasFuturasAlunoUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios();

const historicoAulasFuturasAlunoUseCase = new HistoricoAulasFuturasAlunoUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioNaoEncontrado
);

export { historicoAulasFuturasAlunoUseCase }