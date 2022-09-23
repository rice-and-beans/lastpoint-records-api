import { Request, Response } from "express";
import { CriarDisciplinaUseCase } from "../../../domain/useCases/disciplina/criarDisciplina/criarDisciplinaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriarDisciplinaController extends BaseControllerAuth {

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