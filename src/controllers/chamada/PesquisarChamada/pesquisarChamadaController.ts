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
        const listaChamada = await this.pesquisarChamadaUseCase.execute();
        return response.status(200).send(listaChamada);
    }

}