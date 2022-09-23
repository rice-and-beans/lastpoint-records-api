import { CursoRepositoryImpl } from "../../../../data/repositories/cursoRepositoryImpl";
import { ValidaParamObrigatorios } from "../../../validations/validaParamObrigatorio";
import { BuscarCursoPorCodigoUseCase } from "./buscarCursoPorCodigoUseCase";

const cursoRepositoryImpl = new CursoRepositoryImpl();

const validaParamObrigatorios = new ValidaParamObrigatorios(
);

const buscarCursoPorCodigoUseCase = new BuscarCursoPorCodigoUseCase(
    cursoRepositoryImpl,
    validaParamObrigatorios
);

export { buscarCursoPorCodigoUseCase }