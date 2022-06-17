import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarUsuarioPorEmailUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorEmail/buscarUsuarioPorEmailUseCase";

export class BuscarUsuarioPorEmailController extends BaseController {

    constructor(
        private buscarUsuarioPorEmailUseCase: BuscarUsuarioPorEmailUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const email = request.query.email as string;
        console.log("email retornou???"+email)
        const listaUsuarios = await this.buscarUsuarioPorEmailUseCase.execute({email});
        return response.status(200).send(listaUsuarios);
    }

}