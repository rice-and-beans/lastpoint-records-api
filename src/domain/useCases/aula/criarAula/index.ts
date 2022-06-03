import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { CriarAulaUseCase } from "./criarAulaUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const criarAulaUseCase = new CriarAulaUseCase(
    aulaRepositoryImpl
);

export { criarAulaUseCase }