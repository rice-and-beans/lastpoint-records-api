import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { RecuperaChamadaJafeitaUseCase } from "../../../domain/useCases/chamada/recuperaChamadaJafeita/recuperaChamadaJafeitaUseCase";

export class RecuperaChamadaJafeitaController extends BaseController {

    constructor(
        private recuperaChamadaJafeitaUseCase: RecuperaChamadaJafeitaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const {codusuario, codaula} = request.body;
        const listaChamada = await this.recuperaChamadaJafeitaUseCase.execute({
            codusuario,
            codaula
        });
        return response.status(200).send(listaChamada);
    }

}