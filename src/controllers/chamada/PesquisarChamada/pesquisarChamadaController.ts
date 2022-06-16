import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { PesquisarChamadaUseCase } from "../../../domain/useCases/chamada/pesquisarChamada/pesquisarChamadaUseCase";

export class PesquisarChamadaController extends BaseController {

    constructor(
        private pesquisarChamadaUseCase: PesquisarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const {datahorainicio, datahorafim, campo} = request.body;
        const listaChamada = await this.pesquisarChamadaUseCase.execute({
            datahorainicio,
            datahorafim,
            campo
        });
        return response.status(200).send(listaChamada);
    }

}