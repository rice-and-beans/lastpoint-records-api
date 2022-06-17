import { historicoAulasPassadasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasPassadasAluno";
import { HistoricoAulasPassadasAlunoController } from "./historicoAulasPassadasAlunoController";

const historicoAulasPassadasAlunoController = new HistoricoAulasPassadasAlunoController(
    historicoAulasPassadasAlunoUseCase
);

export { historicoAulasPassadasAlunoController }