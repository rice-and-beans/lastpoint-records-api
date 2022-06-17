import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarUsuarioPorCodigoUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorCodigo/buscarUsuarioPorCodigoUseCase";

export class BuscarUsuarioPorCodigoController extends BaseController {

    constructor(
        private buscarUsuarioPorCodigoUseCase: BuscarUsuarioPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaUsuarios = await this.buscarUsuarioPorCodigoUseCase.execute({codigo});
        return response.status(200).send(listaUsuarios);
    }

}