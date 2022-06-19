import { Request, Response } from "express";
import { HistoricoAulasFuturasProfessorUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasProfessor/historicoAulasFuturasProfessorUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class HistoricoAulasFuturasProfessorController extends BaseControllerAuth {

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