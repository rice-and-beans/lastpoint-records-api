import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { RecuperaAulaAlunoAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaAlunoAtual/recuperaAulaAlunoAtualUseCase";

export class RecuperaAulaAlunoAtualController extends BaseController {

    constructor(
        private recuperaAulaAlunoAtualUseCase: RecuperaAulaAlunoAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const aula = await this.recuperaAulaAlunoAtualUseCase.execute(codigo);
        return response.status(200).send(aula);
    }

}