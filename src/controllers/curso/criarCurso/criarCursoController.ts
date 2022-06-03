import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { CriarCursoUseCase } from "../../../domain/useCases/curso/criarCurso/criarCursoUseCase";

export class CriarCursoController extends BaseController {

    constructor(
        private criarCursoUseCase: CriarCursoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo, nome, descricao } = request.body;
        await this.criarCursoUseCase.execute({
            codigo,
            nome,
            descricao
        });
        return response.status(201).send();
    }

}