import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { RecuperaChamadaJafeitaUseCase } from "./recuperaChamadaJafeitaUseCase";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);

const validaParamsObrigatorios = new ValidaParamObrigatorios();

const recuperaChamadaJafeitaUseCase = new RecuperaChamadaJafeitaUseCase(
    chamadaRepositoryImpl,
    validaParamsObrigatorios,
    validaUsuarioNaoExisteCodigo,
    validaAulaNaoEncontrado
);

export { recuperaChamadaJafeitaUseCase }