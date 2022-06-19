import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { RecuperaAulaProfessorAtualUseCase } from "./recuperaAulaProfessorAtualUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaParamsObrigatorios = new ValidaParamObrigatorios();

const recuperaAulaAtualProfessorUseCase = new RecuperaAulaProfessorAtualUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado,
    validaParamsObrigatorios
);

export { recuperaAulaAtualProfessorUseCase }