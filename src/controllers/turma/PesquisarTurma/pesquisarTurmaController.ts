import { Request, Response } from "express";
import { PesquisarTurmaUseCase } from "../../../domain/useCases/turma/pesquisarTurma/pesquisarTurmaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class PesquisarTurmaController extends BaseControllerAuth {

    constructor(
        private pesquisarTurmaUseCase: PesquisarTurmaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const campo = request.body.campo;
        const listaTurma = await this.pesquisarTurmaUseCase.execute(campo);
        return response.status(200).send(listaTurma);
    }

}