import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioExiste } from "../../../validations/usuario/validaUsuarioExiste";
import { ValidaCamposPreenchidos } from "../../../validations/usuario/validaCamposPreenchidos";

import { CriarUsuarioUseCase } from "./criarUsuarioUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaUsuarioExiste = new ValidaUsuarioExiste(
    usuarioRepositoryImpl
);

const validaCamposFaltantes = new ValidaCamposPreenchidos(
    usuarioRepositoryImpl
);

const criarUsuarioUseCase = new CriarUsuarioUseCase(
    usuarioRepositoryImpl,
    validaCamposFaltantes,
    validaUsuarioExiste,
);

export { criarUsuarioUseCase }