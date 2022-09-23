import { pesquisarChamadaUseCase } from "../../../domain/useCases/chamada/pesquisarChamada";
import { PesquisarChamadaController } from "./pesquisarChamadaController";

const pesquisarChamadaController = new PesquisarChamadaController(
    pesquisarChamadaUseCase
);

export { pesquisarChamadaController }