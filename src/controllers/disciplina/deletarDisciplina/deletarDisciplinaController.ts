import { Request, Response } from "express";
import { DeletarDisciplinaUseCase } from "../../../domain/useCases/disciplina/deletarDisciplina/deletarDisciplinaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarDisciplinaController extends BaseControllerAuth {

    constructor(
        private deletarDisciplinaUseCase: DeletarDisciplinaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarDisciplinaUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}