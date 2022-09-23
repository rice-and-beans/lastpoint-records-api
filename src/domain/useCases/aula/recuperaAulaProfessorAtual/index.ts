import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { RecuperaAulaProfessorAtualUseCase } from "./recuperaAulaProfessorAtualUseCase";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);

const validaParamsObrigatorios = new ValidaParamObrigatorios();

const recuperaAulaAtualProfessorUseCase = new RecuperaAulaProfessorAtualUseCase(
    aulaRepositoryImpl,
    validaUsuarioNaoEncontrado,
    validaParamsObrigatorios,
    validaAulaNaoEncontrado
);

export { recuperaAulaAtualProfessorUseCase }