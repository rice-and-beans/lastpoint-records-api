import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { AtualizarAulaTokenUseCase } from "./atualizarAulaTokenUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const atualizarAulaTokenUseCase = new AtualizarAulaTokenUseCase(
    aulaRepositoryImpl
);

export { atualizarAulaTokenUseCase }