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
        const listaAula = await this.pesquisarAulaUseCase.execute();
        return response.status(200).send(listaAula);
    }

}