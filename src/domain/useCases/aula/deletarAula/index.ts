import { AulaRepositoryImpl } from "../../../../data/repositories/aulaRepositoryImpl";
import { DeletarAulaUseCase } from "./deletarAulaUseCase";

const aulaRepositoryImpl = new AulaRepositoryImpl();

const deletarAulaUseCase = new DeletarAulaUseCase(
    aulaRepositoryImpl
);

export { deletarAulaUseCase }