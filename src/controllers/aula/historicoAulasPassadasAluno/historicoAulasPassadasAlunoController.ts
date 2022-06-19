import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { HistoricoAulasPassadasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasPassadasAluno/historicoAulaPassadaAlunoUseCase";

export class HistoricoAulasPassadasAlunoController extends BaseController {

    constructor(
        private historicoAulasPassadasAlunoUseCase: HistoricoAulasPassadasAlunoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaAula = await this.historicoAulasPassadasAlunoUseCase.execute(codigo);
        return response.status(200).send(listaAula);
    }

}