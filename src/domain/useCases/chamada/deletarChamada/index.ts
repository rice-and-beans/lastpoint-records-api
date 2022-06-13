import { ChamadaRepositoryImpl } from "../../../../data/repositories/chamadaRepositoryImpl";
import { DeletarChamadaUseCase } from "./deletarChamadaUseCase";

const chamadaRepositoryImpl = new ChamadaRepositoryImpl();

const deletarChamadaUseCase = new DeletarChamadaUseCase(
    chamadaRepositoryImpl
);

export { deletarChamadaUseCase }