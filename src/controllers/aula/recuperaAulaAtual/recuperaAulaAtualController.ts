import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { RecuperaAulaAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaAtual/recuperaAulaAtualUseCase";

export class RecuperaAulaAtualController extends BaseController {

    constructor(
        private recuperaAulaAtualUseCase: RecuperaAulaAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.body.codigo as string;
        const aula = await this.recuperaAulaAtualUseCase.execute(codigo);
        return response.status(200).send(aula);
    }

}