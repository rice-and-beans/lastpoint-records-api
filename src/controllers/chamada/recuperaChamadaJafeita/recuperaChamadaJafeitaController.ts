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
        const {codUsuario, codAula} = request.body;
        const chamada = await this.recuperaChamadaJafeitaUseCase.execute({
            codUsuario,
            codAula
        });
        return response.status(200).send(chamada);
    }

}