import { Request, Response } from "express";
import { DeletarTurmaUseCase } from "../../../domain/useCases/turma/deletarTurma/deletarTurmaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarTurmaController extends BaseControllerAuth {

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