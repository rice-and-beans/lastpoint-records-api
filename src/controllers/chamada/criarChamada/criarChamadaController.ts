import { Request, Response } from "express";
import { CriarChamadaUseCase } from "../../../domain/useCases/chamada/criarChamada/criarChamadaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriarChamadaController extends BaseControllerAuth {

    constructor(
        private criarChamadaUseCase: CriarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, justificativa,  usuarioCodigo, aulaCodigo, presenca } = request.body;
        await this.criarChamadaUseCase.execute({
            codigo,
            justificativa,
            usuarioCodigo,
            aulaCodigo,
            presenca
        });
        return response.status(201).send();
    }

}