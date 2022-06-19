import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { HistoricoAulasPassadasProfessorUseCase } from "../../../domain/useCases/aula//historicoAulasPassadasProfessor/historicoAulaPassadaProfessorUseCase";

export class HistoricoAulasPassadasProfessorController extends BaseController {

    constructor(
        private historicoAulasPassadasProfessorUseCase: HistoricoAulasPassadasProfessorUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaAula = await this.historicoAulasPassadasProfessorUseCase.execute(codigo);
        return response.status(200).send(listaAula);
    }

}