import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { DeletarUsuarioUseCase } from "../../../domain/useCases/usuario/deletarUsuario/deletarUsuarioUseCase";

export class DeletarUsuarioController extends BaseController {

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