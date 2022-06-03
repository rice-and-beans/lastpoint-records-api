import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { AtualizarAulaUseCase } from "./atualizarAulaUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const atualizarAulaUseCase = new AtualizarAulaUseCase(
    aulaRepositoryImpl
);

export { atualizarAulaUseCase }