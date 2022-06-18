import { Request, Response } from "express";
import { DeletarCursoUseCase } from "../../../domain/useCases/curso/deletarCurso/deletarCursoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class DeletarCursoController extends BaseControllerAuth {

    constructor(
        private deletarCursoUseCase: DeletarCursoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const { codigo } = request.body;
        await this.deletarCursoUseCase.execute({
            codigo
        });
        return response.status(200).send();
    }

}