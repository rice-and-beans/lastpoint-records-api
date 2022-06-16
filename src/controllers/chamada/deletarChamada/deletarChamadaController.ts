import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { DeletarChamadaUseCase } from "../../../domain/useCases/chamada/deletarChamada/deletarChamadaUseCase";

export class DeletarChamadaController extends BaseController {

    constructor(
        private deletarChamadaUseCase: DeletarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarChamadaUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}