import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { CriarChamadaUseCase } from "./criarChamadaUseCase";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const criarChamadaUseCase = new CriarChamadaUseCase(
    chamadaRepositoryImpl
);

export { criarChamadaUseCase }