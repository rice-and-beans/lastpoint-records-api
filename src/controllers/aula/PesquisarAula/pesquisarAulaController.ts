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
        const {datahorainicio, datahorafim, campo} = request.body;
        const listaAula = await this.pesquisarAulaUseCase.execute({
            datahorafim,
            datahorainicio,
            campo
        });
        return response.status(200).send(listaAula);
    }

}