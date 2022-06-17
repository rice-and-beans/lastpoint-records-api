import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { HistoricoAulasFuturasUseCase } from "./historicoAulaFuturaUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const historicoAulasFuturasUseCase = new HistoricoAulasFuturasUseCase(
    aulaRepositoryImpl
);

export { historicoAulasFuturasUseCase }