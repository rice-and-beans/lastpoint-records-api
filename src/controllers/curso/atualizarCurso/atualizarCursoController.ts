import { Request, Response } from "express";
import { AtualizarCursoUseCase } from "../../../domain/useCases/curso/atualizarCurso/atualizarCursoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class AtualizarCursoController extends BaseControllerAuth {

    constructor(
        private atualizarCursoUseCase: AtualizarCursoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.atualizarCursoUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(200).send();
    }

}