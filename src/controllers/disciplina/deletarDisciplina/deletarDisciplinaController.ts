import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { DeletarDisciplinaUseCase } from "../../../domain/useCases/disciplina/deletarDisciplina/deletarDisciplinaUseCase";

export class DeletarDisciplinaController extends BaseController {

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