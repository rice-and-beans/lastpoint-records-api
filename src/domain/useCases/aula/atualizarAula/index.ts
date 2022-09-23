import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { AtualizarAulaUseCase } from "./atualizarAulaUseCase";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaAulaNaoEncontrado } from "../../../validations/aula/validaAulaNaoEncontrado";
import { ValidaCursoNaoEncontrado } from "../../../validations/curso/validaCursoNaoEncontrado";
import { ValidaTurmaNaoEncontrado } from "../../../validations/turma/validaTurmaNaoEncontrado";
import { ValidaDisciplinaNaoEncontrado } from "../../../validations/disciplina/validaDisciplinaNaoEncontrado";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";

const aulaRepositoryImpl = new AulaRepositoryImpl();
const cursoRepositoryImpl = new CursoRepositoryImpl();
const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();
const turmaRepositoryImpl = new TurmaRepositoryImpl();
const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const validaAulaNaoEncontrado = new ValidaAulaNaoEncontrado(
    aulaRepositoryImpl
);
const validaCursoNaoEncontrado = new ValidaCursoNaoEncontrado(
    cursoRepositoryImpl
);
const validaTurmaNaoEncontrado = new ValidaTurmaNaoEncontrado(
    turmaRepositoryImpl
);
const validaDisciplinaNaoEncontrado = new ValidaDisciplinaNaoEncontrado(
    disciplinaRepositoryImpl
);
const validaUsuarioNaoExisteCodigo = new ValidaUsuarioNaoExisteCodigo(
    usuarioRepositoryImpl
);   

const atualizarAulaUseCase = new AtualizarAulaUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaNaoEncontrado,
    validaTurmaNaoEncontrado,
    validaUsuarioNaoExisteCodigo,
    validaDisciplinaNaoEncontrado,
    validaCursoNaoEncontrado
);

export { atualizarAulaUseCase }