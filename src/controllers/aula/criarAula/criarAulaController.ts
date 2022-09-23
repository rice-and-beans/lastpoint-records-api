import { Request, Response } from "express";
import { CriarAulaUseCase } from "../../../domain/useCases/aula/criarAula/criarAulaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriarAulaController extends BaseControllerAuth {

    constructor(
        private criarAulaUseCase: CriarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao, dataHoraInicio, dataHoraFim, usuarioCodigo, turmaCodigo,
            cursoCodigo, disciplinaCodigo} = request.body;
        await this.criarAulaUseCase.execute({
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
        return response.status(201).send();
    }

}