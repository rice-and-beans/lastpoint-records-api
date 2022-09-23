import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { CriarChamadaUseCase } from "./criarChamadaUseCase";
import { ValidaChamadaExiste } from "../../../validations/chamada/validaChamadaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";
import { ValidaAulaNaoExiste } from "../../../validations/aula/validaAulaNaoExiste";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();
const aulaRepositoryImpl = new AulaRepositoryImpl();
const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaChamadaExiste = new ValidaChamadaExiste(
    chamadaRepositoryImpl
);

const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);

const validaAulaNaoExiste = new ValidaAulaNaoExiste(
    aulaRepositoryImpl
);

const validaParamObrigatorios = new ValidaParamObrigatorios();

const criarChamadaUseCase = new CriarChamadaUseCase(
    chamadaRepositoryImpl,
    validaParamObrigatorios,
    validaChamadaExiste,
    validaUsuarioNaoExisteCodigo,
    validaAulaNaoExiste
);

export { criarChamadaUseCase }