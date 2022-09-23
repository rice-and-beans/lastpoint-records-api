import { Request, Response } from "express";
import { BuscarCursoPorCodigoUseCase } from "../../../domain/useCases/curso/buscarCursoPorCodigo/buscarCursoPorCodigoUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class BuscarCursoPorCodigoController extends BaseControllerAuth {

    constructor(
        private buscarCursoPorCodigoUseCase: BuscarCursoPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const curso = await this.buscarCursoPorCodigoUseCase.execute({codigo});
        return response.status(200).send(curso);
    }

}