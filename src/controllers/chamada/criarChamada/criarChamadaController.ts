import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { CriarChamadaUseCase } from "../../../domain/useCases/chamada/criarChamada/criarChamadaUseCase";

export class CriarChamadaController extends BaseController {

    constructor(
        private criarChamadaUseCase: CriarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, justificativa,  usuarioCodigo, aulaCodigo } = request.body;
        await this.criarChamadaUseCase.execute({
            codigo,
            justificativa,
            usuarioCodigo,
            aulaCodigo
        });
        return response.status(201).send();
    }

}