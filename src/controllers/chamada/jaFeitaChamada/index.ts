import { jaFeitaChamadaUseCase } from "../../../domain/useCases/chamada/jaFeitaChamada";
import { JaFeitaChamadaController } from "./jaFeitaChamadaController";

const jaFeitaChamadaController = new JaFeitaChamadaController(
    jaFeitaChamadaUseCase
);

export { jaFeitaChamadaController }