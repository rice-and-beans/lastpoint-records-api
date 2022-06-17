import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { HistoricoAulasPassadasProfessorUseCase } from "../../../domain/useCases/aula//historicoAulasPassadasProfessor/historicoAulaPassadaProfessorUseCase";

export class HistoricoAulasPassadasProfessorController extends BaseController {

    constructor(
        private historicoAulasPassadasProfessorUseCase: HistoricoAulasPassadasProfessorUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const listaAula = await this.historicoAulasPassadasProfessorUseCase.execute();
        return response.status(200).send(listaAula);
    }

}