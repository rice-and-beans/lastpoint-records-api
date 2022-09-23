import { recuperaChamadaJafeitaUseCase } from "../../../domain/useCases/chamada/recuperaChamadaJafeita";
import { RecuperaChamadaJafeitaController } from "./recuperaChamadaJafeitaController";

const recuperaChamadaJafeitaController = new RecuperaChamadaJafeitaController(
    recuperaChamadaJafeitaUseCase
);

export { recuperaChamadaJafeitaController }