import { Request, Response } from "express";
import { AtualizarAulaTokenUseCase } from "../../../domain/useCases/aula/atualizarAulaToken/atualizarAulaTokenUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarAulaTokenController extends BaseControllerAuth {

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