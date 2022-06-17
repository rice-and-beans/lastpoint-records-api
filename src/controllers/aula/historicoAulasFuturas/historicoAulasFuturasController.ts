import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { HistoricoAulasFuturasUseCase } from "../../../domain/useCases/aula/historicoAulasFuturas/historicoAulaFuturaUseCase";

export class HistoricoAulasFuturasController extends BaseController {

    constructor(
        private historicoAulasFuturasUseCase: HistoricoAulasFuturasUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const listaAula = await this.historicoAulasFuturasUseCase.execute();
        return response.status(200).send(listaAula);
    }

}