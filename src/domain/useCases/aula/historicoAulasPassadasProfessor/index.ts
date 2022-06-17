import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { HistoricoAulasPassadasProfessorUseCase } from "./historicoAulaPassadaProfessorUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const historicoAulasPassadasProfessorUseCase = new HistoricoAulasPassadasProfessorUseCase(
    aulaRepositoryImpl
);

export { historicoAulasPassadasProfessorUseCase }