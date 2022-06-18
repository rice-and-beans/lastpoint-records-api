import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarTurmaPorCodigoUseCase } from "../../../domain/useCases/turma/buscarTurmaPorCodigo/buscarTurmaPorCodigoUseCase";

export class BuscarTurmaPorCodigoController extends BaseController {

    constructor(
        private buscarTurmaPorCodigoUseCase: BuscarTurmaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaTurmas = await this.buscarTurmaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(listaTurmas);
    }

}