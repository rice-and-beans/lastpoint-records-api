import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { AtualizarUsuarioUseCase } from "../../../domain/useCases/usuario/atualizarUsuario/atualizarUsuarioUseCase";

export class AtualizarUsuarioController extends BaseController {

    constructor(
        private atualizarUsuarioUseCase: AtualizarUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, email, senha, tipo } = request.body;
        await this.atualizarUsuarioUseCase.execute({
            codigo,
            nome,
            email,
            senha,
            tipo
        });
        return response.status(200).send();
    }

}