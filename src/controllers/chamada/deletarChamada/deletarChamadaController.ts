import { Request, Response } from "express";
import { DeletarChamadaUseCase } from "../../../domain/useCases/chamada/deletarChamada/deletarChamadaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarChamadaController extends BaseControllerAuth {

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