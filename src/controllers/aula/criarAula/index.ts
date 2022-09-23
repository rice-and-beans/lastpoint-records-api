import { criarAulaUseCase } from "../../../domain/useCases/aula/criarAula";
import { CriarAulaController } from "./criarAulaController";

const criarAulaController = new CriarAulaController(
    criarAulaUseCase
);

export { criarAulaController }