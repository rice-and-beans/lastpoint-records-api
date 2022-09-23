import { Request, Response } from "express";
import { BuscarAulaPorCodigoUseCase } from "../../../domain/useCases/aula/buscarAulaPorCodigo/buscarAulaPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarAulaPorCodigoController extends BaseControllerAuth {

    constructor(
        private buscarAulaPorCodigoUseCase: BuscarAulaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const aula = await this.buscarAulaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(aula);
    }

}