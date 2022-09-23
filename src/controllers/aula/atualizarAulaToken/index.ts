import { atualizarAulaTokenUseCase } from "../../../domain/useCases/aula/atualizarAulaToken";
import { AtualizarAulaTokenController } from "./atualizarAulaTokenController";

const atualizarAulaTokenController = new AtualizarAulaTokenController(
    atualizarAulaTokenUseCase
);

export { atualizarAulaTokenController }