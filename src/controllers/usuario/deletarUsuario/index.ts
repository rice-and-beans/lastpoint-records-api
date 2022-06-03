import { deletarUsuarioUseCase } from "../../../domain/useCases/usuario/deletarUsuario";
import { DeletarUsuarioController } from "./deletarUsuarioController";

const deletarUsuarioController = new DeletarUsuarioController(
    deletarUsuarioUseCase
);

export { deletarUsuarioController }