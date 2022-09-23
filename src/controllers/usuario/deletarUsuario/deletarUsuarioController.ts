import { Request, Response } from "express";
import { DeletarUsuarioUseCase } from "../../../domain/useCases/usuario/deletarUsuario/deletarUsuarioUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarUsuarioController extends BaseControllerAuth {

    constructor(
        private deletarUsuarioUseCase: DeletarUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarUsuarioUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}