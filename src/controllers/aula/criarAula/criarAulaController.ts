import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { CriarAulaUseCase } from "../../../domain/useCases/aula/criarAula/criarAulaUseCase";

export class CriarAulaController extends BaseController {

    constructor(
        private criarAulaUseCase: CriarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao, datahorainicio, datahorafim, usuarioCodigo, turmaCodigo,
            cursoCodigo, disciplinaCodigo} = request.body;
        await this.criarAulaUseCase.execute({
            codigo,
            datahorainicio,
            datahorafim,
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