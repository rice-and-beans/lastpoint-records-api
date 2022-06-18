import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { AtualizarChamadaUseCase } from "./atualizarChamadaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaChamadaNaoEncontrado } from "../../../validations/chamada/validaChamadaNaoEncontrado";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaAulaNaoExiste } from "../../../validations/aula/validaAulaNaoExiste";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();
const aulaRepositoryImpl = new AulaRepositoryImpl();
const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios();

const validaAulaNaoExiste = new ValidaAulaNaoExiste(
    aulaRepositoryImpl
);

const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validachamadaNaoEncontrado = new ValidaChamadaNaoEncontrado(
    chamadaRepositoryImpl
);

const atualizarChamadaUseCase = new AtualizarChamadaUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios,
    validachamadaNaoEncontrado,
    validaUsuarioNaoExisteCodigo,
    validaAulaNaoExiste
);

export { atualizarChamadaUseCase }