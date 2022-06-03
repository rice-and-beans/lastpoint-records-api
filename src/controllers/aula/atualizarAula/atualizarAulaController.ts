import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { AtualizarAulaUseCase } from "../../../domain/useCases/aula/atualizarAula/atualizarAulaUseCase";

export class AtualizarAulaController extends BaseController {

    constructor(
        private atualizarAulaUseCase: AtualizarAulaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao, datahorainicio, datahorafim, usuarioId } = request.body;
        await this.atualizarAulaUseCase.execute({
            codigo,
            datahorainicio,
            datahorafim,
            nome,
            descricao,
            usuarioId
        });
        return response.status(200).send();
    }

}