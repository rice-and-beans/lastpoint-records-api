import { historicoAulasFuturasProfessorUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasProfessor";
import { HistoricoAulasFuturasProfessorController } from "./historicoAulasFuturasProfessorController";

const historicoAulasFuturasProfessorController = new HistoricoAulasFuturasProfessorController(
    historicoAulasFuturasProfessorUseCase
);

export { historicoAulasFuturasProfessorController }