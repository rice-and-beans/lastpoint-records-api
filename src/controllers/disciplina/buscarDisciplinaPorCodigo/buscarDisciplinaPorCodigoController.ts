import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarDisciplinaPorCodigoUseCase } from "../../../domain/useCases/disciplina/buscarDisciplinaPorCodigo/buscarDisciplinaPorCodigoUseCase";

export class BuscarDisciplinaPorCodigoController extends BaseController {

    constructor(
        private buscarDisciplinaPorCodigoUseCase: BuscarDisciplinaPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaDisciplinas = await this.buscarDisciplinaPorCodigoUseCase.execute({codigo});
        return response.status(200).send(listaDisciplinas);
    }

}