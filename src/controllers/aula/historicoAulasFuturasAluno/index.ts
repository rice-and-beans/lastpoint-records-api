import { historicoAulasFuturasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasAluno";
import { HistoricoAulasFuturasAlunoController } from "./historicoAulasFuturasAlunoController";

const historicoAulasFuturasAlunoController = new HistoricoAulasFuturasAlunoController(
    historicoAulasFuturasAlunoUseCase
);

export { historicoAulasFuturasAlunoController }