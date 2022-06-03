import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { DeletarTurmaUseCase } from "../../../domain/useCases/turma/deletarTurma/deletarTurmaUseCase";

export class DeletarTurmaController extends BaseController {

    constructor(
        private deletarTurmaUseCase: DeletarTurmaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarTurmaUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}