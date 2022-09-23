import { Request, Response } from "express";
import { HistoricoAulasPassadasAlunoUseCase } from "../../../domain/useCases/aula/historicoAulasPassadasAluno/historicoAulaPassadaAlunoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class HistoricoAulasPassadasAlunoController extends BaseControllerAuth {

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