import { Request, Response } from "express";
import { RecuperaAulaAlunoAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaAlunoAtual/recuperaAulaAlunoAtualUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class RecuperaAulaAlunoAtualController extends BaseControllerAuth {

    constructor(
        private recuperaAulaAlunoAtualUseCase: RecuperaAulaAlunoAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codUsuario = request.query.codUsuario as string;
        const codAula = request.query.codAula as string;
        const aula = await this.recuperaAulaAlunoAtualUseCase.execute(codUsuario, codAula);
        return response.status(200).send(aula);
    }

}