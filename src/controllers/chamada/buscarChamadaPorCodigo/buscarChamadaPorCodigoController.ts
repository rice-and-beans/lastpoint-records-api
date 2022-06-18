import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarChamadaPorCodigoUseCase } from "../../../domain/useCases/chamada/buscarChamadaPorCodigo/buscarChamadaPorCodigoUseCase";

export class BuscarChamadaPorCodigoController extends BaseController {

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