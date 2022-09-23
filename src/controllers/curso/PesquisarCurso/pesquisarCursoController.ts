import { Request, Response } from "express";
import { PesquisarCursoUseCase } from "../../../domain/useCases/curso/pesquisarCurso/pesquisarCursoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class PesquisarCursoController extends BaseControllerAuth {

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