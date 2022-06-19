import { Request, Response } from "express";
import { HistoricoAulasPassadasProfessorUseCase } from "../../../domain/useCases/aula//historicoAulasPassadasProfessor/historicoAulaPassadaProfessorUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class HistoricoAulasPassadasProfessorController extends BaseControllerAuth {

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