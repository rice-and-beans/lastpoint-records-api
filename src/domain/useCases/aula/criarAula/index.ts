import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { CriarAulaUseCase } from "./criarAulaUseCase";
import { ValidaAulaExiste } from "../../../validations/aula/validaAulaExiste";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { ValidaCursoNaoEncontrado } from "../../../validations/curso/validaCursoNaoEncontrado";
import { ValidaTurmaNaoEncontrado } from "../../../validations/turma/validaTurmaNaoEncontrado";
import { DisciplinaRepositoryImpl } from "../../../../data/repositories/disciplinaRepositoryImpl";
import { TurmaRepositoryImpl } from "../../../../data/repositories/turmaRepositoryImpl";
import { UsuarioRepositoryImpl } from "../../../../data/repositories/usuarioRepositoryImpl";
import { ValidaDisciplinaNaoEncontrado } from "../../../validations/disciplina/validaDisciplinaNaoEncontrado";
import { ValidaUsuarioNaoExisteCodigo } from "../../../validations/usuario/validaUsuarioNaoExisteCodigo";

const aulaRepositoryImpl = new AulaRepositoryImpl();
const cursoRepositoryImpl = new CursoRepositoryImpl();
const disciplinaRepositoryImpl = new DisciplinaRepositoryImpl();
const turmaRepositoryImpl = new TurmaRepositoryImpl();
const usuarioRepositoryImpl = new UsuarioRepositoryImpl();

const validaAulaExiste = new ValidaAulaExiste(
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

const validaParamObrigatorios = new ValidaParamObrigatorios();

const criarAulaUseCase = new CriarAulaUseCase(
    aulaRepositoryImpl,
    validaParamObrigatorios,
    validaAulaExiste,
    validaTurmaNaoEncontrado,
    validaUsuarioNaoExisteCodigo,
    validaDisciplinaNaoEncontrado,
    validaCursoNaoEncontrado
);

export { criarAulaUseCase }