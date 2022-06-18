import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { HistoricoAulasFuturasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasAluno/historicoAulasFuturasAlunoUseCase";

export class HistoricoAulasFuturasAlunoController extends BaseController {

    constructor(
        private historicoAulasFuturasAlunoUseCase: HistoricoAulasFuturasAlunoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaAula = await this.historicoAulasFuturasAlunoUseCase.execute(codigo);
        return response.status(200).send(listaAula);
    }

}