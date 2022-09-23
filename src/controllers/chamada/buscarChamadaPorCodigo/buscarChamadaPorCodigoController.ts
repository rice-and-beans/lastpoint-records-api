import { Request, Response } from "express";
import { BuscarChamadaPorCodigoUseCase } from "../../../domain/useCases/chamada/buscarChamadaPorCodigo/buscarChamadaPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarChamadaPorCodigoController extends BaseControllerAuth {

    constructor(
        private buscarChamadaPorCodigoUseCase: BuscarChamadaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const chamada = await this.buscarChamadaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(chamada);
    }

}