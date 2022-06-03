import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { PesquisarAulaUseCase } from "./pesquisarAulaUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const pesquisarAulaUseCase = new PesquisarAulaUseCase(
    aulaRepositoryImpl
);

export { pesquisarAulaUseCase }