import { Request, Response } from "express";
import { PesquisarDisciplinaUseCase } from "../../../domain/useCases/disciplina/pesquisarDisciplina/pesquisarDisciplinaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class PesquisarDisciplinaController extends BaseControllerAuth {

    constructor(
        private pesquisarDisciplinaUseCase: PesquisarDisciplinaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const campo = request.body.campo;
        const listaDisciplina = await this.pesquisarDisciplinaUseCase.execute(campo);
        return response.status(200).send(listaDisciplina);
    }

}