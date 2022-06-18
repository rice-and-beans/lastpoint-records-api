import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { NaAulaAtualUseCase } from "../../../domain/useCases/aula/naAulaAtual/naAulaAtualUseCase";

export class NaAulaAtualController extends BaseController {

    constructor(
        private naAulaAtualUseCase: NaAulaAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.body.codigo as string;
        const aula = await this.naAulaAtualUseCase.execute(codigo);
        return response.status(200).send(aula);
    }

}