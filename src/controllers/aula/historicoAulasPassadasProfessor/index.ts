import { historicoAulasPassadasProfessorUseCase } from "../../../domain/useCases/aula/historicoAulasPassadasProfessor";
import { HistoricoAulasPassadasProfessorController } from "./historicoAulasPassadasProfessorController";

const historicoAulasPassadasProfessorController = new HistoricoAulasPassadasProfessorController(
    historicoAulasPassadasProfessorUseCase
);

export { historicoAulasPassadasProfessorController }