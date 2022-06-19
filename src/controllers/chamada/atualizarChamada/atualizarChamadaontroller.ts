import { Request, Response } from "express";
import { AtualizarChamadaUseCase } from "../../../domain/useCases/chamada/atualizarChamada/atualizarChamadaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarChamadaController extends BaseControllerAuth {

    constructor(
        private atualizarChamadaUseCase: AtualizarChamadaUseCase,
    ){
        super()
    }
    
    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, justificativa, usuarioCodigo, aulaCodigo, presenca } = request.body;
        await this.atualizarChamadaUseCase.execute({
            codigo,
            justificativa,
            usuarioCodigo,
            aulaCodigo,
            presenca
        });
        return response.status(200).send();
    }

}