import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarUsuarioPorEmailUseCase } from "./buscarUsuarioPorEmailUseCase";

const usuarioRepositoryImpl = new UsuarioRepositoryImpl();
const validaParamObrigatorios = new ValidaParamObrigatorios();

const buscarUsuarioPorEmail = new BuscarUsuarioPorEmailUseCase(
    usuarioRepositoryImpl,
    validaParamObrigatorios
);

export { buscarUsuarioPorEmail }