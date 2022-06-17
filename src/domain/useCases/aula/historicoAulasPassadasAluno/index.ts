import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { HistoricoAulasPassadasAlunoUseCase } from "./historicoAulaPassadaAlunoUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const historicoAulasPassadasAlunoUseCase = new HistoricoAulasPassadasAlunoUseCase(
    aulaRepositoryImpl
);

export { historicoAulasPassadasAlunoUseCase }