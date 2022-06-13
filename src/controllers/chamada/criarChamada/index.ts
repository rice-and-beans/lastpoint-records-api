import { criarChamadaUseCase } from "../../../domain/useCases/chamada/criarChamada";
import { CriarChamadaController } from "./criarChamadaController";

const criarChamadaController = new CriarChamadaController(
    criarChamadaUseCase
);

export { criarChamadaController }