import { Request, Response } from "express";
import { RecuperaChamadaJafeitaUseCase } from "../../../domain/useCases/chamada/recuperaChamadaJafeita/recuperaChamadaJafeitaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class RecuperaChamadaJafeitaController extends BaseControllerAuth {

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