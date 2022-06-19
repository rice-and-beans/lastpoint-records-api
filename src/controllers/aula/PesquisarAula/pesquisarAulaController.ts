import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { PesquisarAulaUseCase } from "../../../domain/useCases/aula/pesquisarAula/pesquisarAulaUseCase";

export class PesquisarAulaController extends BaseController {

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