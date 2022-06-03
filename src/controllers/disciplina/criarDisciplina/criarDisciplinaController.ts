import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { CriarDisciplinaUseCase } from "../../../domain/useCases/disciplina/criarDisciplina/criarDisciplinaUseCase";

export class CriarDisciplinaController extends BaseController {

    constructor(
        private criarDisciplinaUseCase: CriarDisciplinaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.criarDisciplinaUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(201).send();
    }

}