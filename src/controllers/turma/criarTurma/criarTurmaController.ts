import { Request, Response } from "express";
import { CriarTurmaUseCase } from "../../../domain/useCases/turma/criarTurma/criarTurmaUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class CriarTurmaController extends BaseControllerAuth {

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