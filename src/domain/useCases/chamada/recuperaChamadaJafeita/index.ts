import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { RecuperaChamadaJafeitaUseCase } from "./recuperaChamadaJafeitaUseCase";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
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
    validaAulaNaoEncontrado,
    validaUsuarioNaoEncontrado
    
);

export { recuperaChamadaJafeitaUseCase }