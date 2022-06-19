import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { CriarAulaUseCase } from "../../../domain/useCases/aula/criarAula/criarAulaUseCase";

export class CriarAulaController extends BaseController {

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