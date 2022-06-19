import { Request, Response } from "express";
import { BuscarUsuarioPorEmailUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorEmail/buscarUsuarioPorEmailUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarUsuarioPorEmailController extends BaseControllerAuth {

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