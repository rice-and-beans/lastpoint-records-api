import { Request, Response } from "express";
import { AtualizarDisciplinaUseCase } from "../../../domain/useCases/disciplina/atualizarDisciplina/atualizarDisciplinaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarDisciplinaController extends BaseControllerAuth {

    constructor(
        private atualizarDisciplinaUseCase: AtualizarDisciplinaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.atualizarDisciplinaUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(200).send();
    }

}