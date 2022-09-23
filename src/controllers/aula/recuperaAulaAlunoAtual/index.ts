import { recuperaAulaAtualAlunoUseCase } from "../../../domain/useCases/aula/recuperaAulaAlunoAtual";
import { RecuperaAulaAlunoAtualController } from "./recuperaAulaAlunoAtualController";

const recuperaAulaAlunoAtualController = new RecuperaAulaAlunoAtualController(
    recuperaAulaAtualAlunoUseCase
);

export { recuperaAulaAlunoAtualController }