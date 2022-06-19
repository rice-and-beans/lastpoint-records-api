import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { AtualizarAulaTokenUseCase } from "../../../domain/useCases/aula/atualizarAulaToken/atualizarAulaTokenUseCase";

export class AtualizarAulaTokenController extends BaseController {

    constructor(
        private atualizarAulaTokenUseCase: AtualizarAulaTokenUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, token } = request.body;
        await this.atualizarAulaTokenUseCase.execute({
            codigo,
            token
        });
        return response.status(200).send();
    }

}