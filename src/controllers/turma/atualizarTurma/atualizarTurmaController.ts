import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { AtualizarTurmaUseCase } from "../../../domain/useCases/turma/atualizarTurma/atualizarTurmaUseCase";

export class AtualizarTurmaController extends BaseController {

    constructor(
        private atualizarTurmaUseCase: AtualizarTurmaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.atualizarTurmaUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(200).send();
    }

}