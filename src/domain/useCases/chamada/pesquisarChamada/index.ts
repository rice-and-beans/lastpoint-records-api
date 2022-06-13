import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { PesquisarChamadaUseCase } from "./pesquisarChamadaUseCase";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const pesquisarChamadaUseCase = new PesquisarChamadaUseCase(
    chamadaRepositoryImpl
);

export { pesquisarChamadaUseCase }