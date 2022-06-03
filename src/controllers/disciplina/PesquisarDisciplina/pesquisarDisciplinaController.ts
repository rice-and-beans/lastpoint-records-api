import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { PesquisarDisciplinaUseCase } from "../../../domain/useCases/disciplina/pesquisarDisciplina/pesquisarDisciplinaUseCase";

export class PesquisarDisciplinaController extends BaseController {

    constructor(
        private pesquisarDisciplinaUseCase: PesquisarDisciplinaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const listaDisciplina = await this.pesquisarDisciplinaUseCase.execute();
        return response.status(200).send(listaDisciplina);
    }

}