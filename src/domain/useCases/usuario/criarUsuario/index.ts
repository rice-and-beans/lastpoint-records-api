import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioExiste } from "../../../validations/usuario/validaUsuarioExiste";
import { ValidaParamObrigatorios } from "../../../validations/usuario/validaParamObrigatorio";

import { CriarUsuarioUseCase } from "./criarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioExiste = new ValidaUsuarioExiste(
    usuarioRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const criarUsuarioUseCase = new CriarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios,
    validaUsuarioExiste,
);

export { criarUsuarioUseCase }