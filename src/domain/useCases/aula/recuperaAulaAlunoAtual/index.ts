import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { RecuperaAulaAlunoAtualUseCase } from "./recuperaAulaAlunoAtualUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaParamsObrigatorios = new ValidaParamObrigatorios();

const recuperaAulaAtualAlunoUseCase = new RecuperaAulaAlunoAtualUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado,
    validaParamsObrigatorios
);

export { recuperaAulaAtualAlunoUseCase }