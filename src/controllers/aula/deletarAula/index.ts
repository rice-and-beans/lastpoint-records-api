import { deletarAulaUseCase } from "../../../domain/useCases/aula/deletarAula";
import { DeletarAulaController } from "./deletarAulaController";

const deletarAulaController = new DeletarAulaController(
    deletarAulaUseCase
);

export { deletarAulaController }