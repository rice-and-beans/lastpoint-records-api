import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { BuscarAulaPorCodigoUseCase } from "../../../domain/useCases/aula/buscarAulaPorCodigo/buscarAulaPorCodigoUseCase";

export class BuscarAulaPorCodigoController extends BaseController {

    constructor(
        private buscarAulaPorCodigoUseCase: BuscarAulaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaAulas = await this.buscarAulaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(listaAulas);
    }

}