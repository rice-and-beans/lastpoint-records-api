import { Request, Response } from "express";
import { CriarUsuarioUseCase } from "../../../domain/useCases/usuario/criarUsuario/criarUsuarioUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriarUsuarioController extends BaseControllerAuth {

    constructor(
        private criarUsuarioUseCase: CriarUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, email, senha, tipo } = request.body;
        const token = request.headers['x-access-token'] as string;
        await this.criarUsuarioUseCase.execute({
            codigo,
            nome,
            email,
            senha,
            tipo,
            token
        });
        return response.status(201).send();
    }

}