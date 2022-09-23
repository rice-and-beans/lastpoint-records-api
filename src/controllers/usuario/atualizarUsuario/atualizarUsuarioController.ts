import { Request, Response } from "express";
import { AtualizarUsuarioUseCase } from "../../../domain/useCases/usuario/atualizarUsuario/atualizarUsuarioUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarUsuarioController extends BaseControllerAuth {

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