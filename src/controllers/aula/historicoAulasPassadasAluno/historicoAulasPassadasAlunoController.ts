import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { HistoricoAulasPassadasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasPassadasAluno/historicoAulaPassadaAlunoUseCase";

export class HistoricoAulasPassadasAlunoController extends BaseController {

    constructor(
        private historicoAulasPassadasAlunoUseCase: HistoricoAulasPassadasAlunoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const listaAula = await this.historicoAulasPassadasAlunoUseCase.execute();
        return response.status(200).send(listaAula);
    }

}