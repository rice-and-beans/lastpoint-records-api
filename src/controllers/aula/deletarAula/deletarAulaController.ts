import { Request, Response } from "express";
import { DeletarAulaUseCase } from "../../../domain/useCases/aula/deletarAula/deletarAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarAulaController extends BaseControllerAuth {

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