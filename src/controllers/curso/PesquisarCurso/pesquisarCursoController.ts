import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { PesquisarCursoUseCase } from "../../../domain/useCases/curso/pesquisarCurso/pesquisarCursoUseCase";

export class PesquisarCursoController extends BaseController {

    constructor(
        private pesquisarCursoUseCase: PesquisarCursoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const listaCurso = await this.pesquisarCursoUseCase.execute();
        return response.status(200).send(listaCurso);
    }

}