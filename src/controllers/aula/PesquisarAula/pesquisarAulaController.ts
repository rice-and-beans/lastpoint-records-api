import { Request, Response } from "express";
import { PesquisarAulaUseCase } from "../../../domain/useCases/aula/pesquisarAula/pesquisarAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class PesquisarAulaController extends BaseControllerAuth {

    constructor(
        private pesquisarAulaUseCase: PesquisarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const {dataHoraInicio, dataHoraFim, campo} = request.body;
        const listaAula = await this.pesquisarAulaUseCase.execute({
            dataHoraInicio,
            dataHoraFim,
            campo
        });
        return response.status(200).send(listaAula);
    }

}