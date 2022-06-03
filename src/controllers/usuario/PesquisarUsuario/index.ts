import { deletarUsuarioUseCase } from "../../../domain/useCases/usuario/deletarUsuario";
import { pesquisarUsuarioUseCase } from "../../../domain/useCases/usuario/pesquisarUsuario";
import { PesquisarUsuarioController } from "./pesquisarUsuarioController";

const pesquisarUsuarioController = new PesquisarUsuarioController(
    pesquisarUsuarioUseCase
);

export { pesquisarUsuarioController }