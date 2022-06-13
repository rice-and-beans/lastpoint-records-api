import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { AtualizarChamadaUseCase } from "../../../domain/useCases/chamada/atualizarChamada/atualizarChamadaUseCase";

export class AtualizarChamadaController extends BaseController {

    constructor(
        private atualizarChamadaUseCase: AtualizarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, usuarioCodigo, aulaCodigo } = request.body;
        await this.atualizarChamadaUseCase.execute({
            codigo,
            usuarioCodigo,
            aulaCodigo
        });
        return response.status(200).send();
    }

}