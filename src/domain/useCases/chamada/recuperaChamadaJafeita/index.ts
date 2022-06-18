import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { RecuperaChamadaJafeitaUseCase } from "./recuperaChamadaJafeitaUseCase";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { ValidaUsuarioNaoEncontrado } from "../../../validations/usuario/validaUsuarioNaoEncontrado";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioNaoEncontrado = new ValidaUsuarioNaoEncontrado(
    usuarioRepositoryImpl
);

const aulaRepositoryImpl = new AulaRepositoryImpl();

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);

const recuperaChamadaJafeitaUseCase = new RecuperaChamadaJafeitaUseCase(
    chamadaRepositoryImpl,
    validaAulaNaoEncontrado,
    validaUsuarioNaoEncontrado
    
);

export { recuperaChamadaJafeitaUseCase }