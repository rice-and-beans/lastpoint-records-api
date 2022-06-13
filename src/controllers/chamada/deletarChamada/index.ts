import { deletarChamadaUseCase } from "../../../domain/useCases/chamada/deletarChamada";
import { DeletarChamadaController } from "./deletarChamadaController";

const deletarChamadaController = new DeletarChamadaController(
    deletarChamadaUseCase
);

export { deletarChamadaController }