import { historicoAulasFuturasUseCase } from "../../../domain/useCases/aula/historicoAulasFuturas";
import { HistoricoAulasFuturasController } from "./historicoAulasFuturasController";

const historicoAulasFuturasController = new HistoricoAulasFuturasController(
    historicoAulasFuturasUseCase
);

export { historicoAulasFuturasController }