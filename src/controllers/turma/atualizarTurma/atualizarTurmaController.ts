import { Request, Response } from "express";
import { AtualizarTurmaUseCase } from "../../../domain/useCases/turma/atualizarTurma/atualizarTurmaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarTurmaController extends BaseControllerAuth {

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