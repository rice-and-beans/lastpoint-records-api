import { Request, Response } from "express";
import { PesquisarChamadaUseCase } from "../../../domain/useCases/chamada/pesquisarChamada/pesquisarChamadaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class PesquisarChamadaController extends BaseControllerAuth {

    constructor(
        private pesquisarChamadaUseCase: PesquisarChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const {dataHoraInicio, dataHoraFim, campo} = request.body;
        const listaChamada = await this.pesquisarChamadaUseCase.execute({
            dataHoraInicio,
            dataHoraFim,
            campo
        });
        return response.status(200).send(listaChamada);
    }

}