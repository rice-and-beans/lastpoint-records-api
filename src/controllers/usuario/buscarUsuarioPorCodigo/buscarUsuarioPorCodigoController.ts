import { Request, Response } from "express";
import { BuscarUsuarioPorCodigoUseCase } from "../../../domain/useCases/usuario/buscarUsuarioPorCodigo/buscarUsuarioPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarUsuarioPorCodigoController extends BaseControllerAuth {

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