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
        await this.criarUsuarioUseCase.execute({
            codigo,
            nome,
            email,
            senha,
            tipo
        });
        return response.status(201).send();
    }

}