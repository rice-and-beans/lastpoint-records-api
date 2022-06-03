import { atualizarAulaUseCase } from "../../../domain/useCases/aula/atualizarAula";
import { AtualizarAulaController } from "./atualizarAulaController";

const atualizarAulaController = new AtualizarAulaController(
    atualizarAulaUseCase
);

export { atualizarAulaController }