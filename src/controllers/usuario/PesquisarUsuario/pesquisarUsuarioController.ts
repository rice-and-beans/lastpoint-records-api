import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { PesquisarUsuarioUseCase } from "../../../domain/useCases/usuario/pesquisarUsuario/pesquisarUsuarioUseCase";

export class PesquisarUsuarioController extends BaseController {

    constructor(
        private pesquisarUsuarioUseCase: PesquisarUsuarioUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const nome = request.body.nome;
        const listaUsuarios = await this.pesquisarUsuarioUseCase.execute(nome);
        return response.status(200).send(listaUsuarios);
    }

}