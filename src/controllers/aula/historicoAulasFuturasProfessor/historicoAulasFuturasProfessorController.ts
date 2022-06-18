import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { HistoricoAulasFuturasProfessorUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasProfessor/historicoAulasFuturasProfessorUseCase";

export class HistoricoAulasFuturasProfessorController extends BaseController {

    constructor(
        private historicoAulasFuturasProfessorUseCase: HistoricoAulasFuturasProfessorUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaAula = await this.historicoAulasFuturasProfessorUseCase.execute(codigo);
        return response.status(200).send(listaAula);
    }

}