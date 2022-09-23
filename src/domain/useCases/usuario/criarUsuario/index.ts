import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioExiste } from "../../../validations/usuario/validaUsuarioExiste";
import { ValidaUsuarioCodigoExiste } from "../../../validations/usuario/validaUsuarioCodigoExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { CriarUsuarioUseCase } from "./criarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioExiste = new ValidaUsuarioExiste(
    usuarioRepositoryImpl
);

const validaUsuarioCodigoExiste = new ValidaUsuarioCodigoExiste(
    usuarioRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarUsuarioUseCase = new CriarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioExiste,
    validaUsuarioCodigoExiste
);

export { criarUsuarioUseCase }