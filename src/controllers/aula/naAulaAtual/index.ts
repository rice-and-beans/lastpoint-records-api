import { naAulaAtualUseCase } from "../../../domain/useCases/aula/naAulaAtual";
import { NaAulaAtualController } from "./naAulaAtualController";

const naAulaAtualController = new NaAulaAtualController(
    naAulaAtualUseCase
);

export { naAulaAtualController }