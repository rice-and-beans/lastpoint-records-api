import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { AtualizarDisciplinaUseCase } from "../../../domain/useCases/disciplina/atualizarDisciplina/atualizarDisciplinaUseCase";

export class AtualizarDisciplinaController extends BaseController {

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