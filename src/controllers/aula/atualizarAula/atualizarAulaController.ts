import { Request, Response } from "express";
import { AtualizarAulaUseCase } from "../../../domain/useCases/aula/atualizarAula/atualizarAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarAulaController extends BaseControllerAuth {

    constructor(
        private atualizarAulaUseCase: AtualizarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao, dataHoraInicio, dataHoraFim, usuarioCodigo,
                turmaCodigo, disciplinaCodigo, cursoCodigo } = request.body;
        await this.atualizarAulaUseCase.execute({
            codigo,
            dataHoraInicio,
            dataHoraFim,
            nome,
            descricao,
            usuarioCodigo,
            turmaCodigo,
            cursoCodigo,
            disciplinaCodigo
        });
        return response.status(200).send();
    }

}