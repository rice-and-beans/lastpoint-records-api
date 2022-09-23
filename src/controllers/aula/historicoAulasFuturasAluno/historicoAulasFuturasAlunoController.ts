import { Request, Response } from "express";
import { HistoricoAulasFuturasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasFuturasAluno/historicoAulasFuturasAlunoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class HistoricoAulasFuturasAlunoController extends BaseControllerAuth {

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