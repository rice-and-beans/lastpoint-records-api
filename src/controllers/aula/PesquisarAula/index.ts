import { pesquisarAulaUseCase } from "../../../domain/useCases/aula/pesquisarAula";
import { PesquisarAulaController } from "./pesquisarAulaController";

const pesquisarAulaController = new PesquisarAulaController(
    pesquisarAulaUseCase
);

export { pesquisarAulaController }