import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { DeletarAulaUseCase } from "../../../domain/useCases/aula/deletarAula/deletarAulaUseCase";

export class DeletarAulaController extends BaseController {

    constructor(
        private deletarAulaUseCase: DeletarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarAulaUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}