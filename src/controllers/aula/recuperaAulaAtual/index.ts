import { recuperaAulaAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaAtual";
import { RecuperaAulaAtualController } from "./recuperaAulaAtualController";

const recuperaAulaAtualController = new RecuperaAulaAtualController(
    recuperaAulaAtualUseCase
);

export { recuperaAulaAtualController }