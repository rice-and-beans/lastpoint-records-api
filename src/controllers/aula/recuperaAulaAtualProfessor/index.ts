import { recuperaAulaAtualProfessorUseCase } from "../../../domain/useCases/aula/recuperaAulaProfessorAtual";
import { RecuperaAulaProfessorAtualController } from "./recuperaAulaAtualProfessorController";

const recuperaAulaProfessorAtualController = new RecuperaAulaProfessorAtualController(
    recuperaAulaAtualProfessorUseCase
);

export { recuperaAulaProfessorAtualController }