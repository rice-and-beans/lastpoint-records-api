import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { DeletarCursoUseCase } from "../../../domain/useCases/curso/deletarCurso/deletarCursoUseCase";

export class DeletarCursoController extends BaseController {

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