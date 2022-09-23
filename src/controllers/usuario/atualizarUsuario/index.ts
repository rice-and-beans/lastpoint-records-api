import { atualizarUsuarioUseCase } from "../../../domain/useCases/usuario/atualizarUsuario";
import { AtualizarUsuarioController } from "./atualizarUsuarioController";

const atualizarUsuarioController = new AtualizarUsuarioController(
    atualizarUsuarioUseCase
);

export { atualizarUsuarioController }