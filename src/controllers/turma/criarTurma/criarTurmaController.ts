import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { CriarTurmaUseCase } from "../../../domain/useCases/turma/criarTurma/criarTurmaUseCase";

export class CriarTurmaController extends BaseController {

    constructor(
        private criarTurmaUseCase: CriarTurmaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.criarTurmaUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(201).send();
    }

}