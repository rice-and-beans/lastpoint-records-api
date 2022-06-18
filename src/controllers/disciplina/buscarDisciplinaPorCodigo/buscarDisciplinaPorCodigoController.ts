import { Request, Response } from "express";
import { BuscarDisciplinaPorCodigoUseCase } from "../../../domain/useCases/disciplina/buscarDisciplinaPorCodigo/buscarDisciplinaPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarDisciplinaPorCodigoController extends BaseControllerAuth {

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