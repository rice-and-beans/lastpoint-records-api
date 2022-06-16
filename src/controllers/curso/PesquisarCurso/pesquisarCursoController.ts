import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { PesquisarCursoUseCase } from "../../../domain/useCases/curso/pesquisarCurso/pesquisarCursoUseCase";

export class PesquisarCursoController extends BaseController {

    constructor(
        private pesquisarCursoUseCase: PesquisarCursoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const campo = request.body.campo;
        const listaCurso = await this.pesquisarCursoUseCase.execute(campo);
        return response.status(200).send(listaCurso);
    }

}