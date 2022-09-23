import { Request, Response } from "express";
import { BuscarUsuarioPorEmailUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorEmail/buscarUsuarioPorEmailUseCase";
import { BaseController } from "../../baseController";

export class BuscarUsuarioPorEmailController extends BaseController {

    constructor(
        private buscarUsuarioPorEmailUseCase: BuscarUsuarioPorEmailUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const email = request.query.email as string;
        const usuario = await this.buscarUsuarioPorEmailUseCase.execute({email});
        return response.status(200).send(usuario);
    }

}