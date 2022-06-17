import { buscarUsuarioPorEmail } from "../../../domain/useCases/usuario/buscarUsuarioPorEmail";
import { BuscarUsuarioPorEmailController } from "./buscarUsuarioPorEmailController";

const buscarUsuarioPorEmailController = new BuscarUsuarioPorEmailController(
    buscarUsuarioPorEmail
);

export { buscarUsuarioPorEmailController }
