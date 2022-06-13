import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { AtualizarChamadaUseCase } from "./atualizarChamadaUseCase";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const atualizarChamadaUseCase = new AtualizarChamadaUseCase(
    chamadaRepositoryImpl
);

export { atualizarChamadaUseCase }