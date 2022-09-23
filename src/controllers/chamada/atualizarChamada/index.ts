import { atualizarChamadaUseCase } from "../../../domain/useCases/chamada/atualizarChamada";
import { AtualizarChamadaController } from "./atualizarChamadaontroller";

const atualizarChamadaController = new AtualizarChamadaController(
    atualizarChamadaUseCase
);

export { atualizarChamadaController }