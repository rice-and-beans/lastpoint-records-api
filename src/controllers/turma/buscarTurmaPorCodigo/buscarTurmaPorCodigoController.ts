import { Request, Response } from "express";
import { BuscarTurmaPorCodigoUseCase } from "../../../domain/useCases/turma/buscarTurmaPorCodigo/buscarTurmaPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarTurmaPorCodigoController extends BaseControllerAuth {

    constructor(
        private buscarTurmaPorCodigoUseCase: BuscarTurmaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const turma = await this.buscarTurmaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(turma);
    }

}