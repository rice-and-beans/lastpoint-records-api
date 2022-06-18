import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { BuscarCursoPorCodigoUseCase } from "../../../domain/useCases/curso/buscarCursoPorCodigo/buscarCursoPorCodigoUseCase";

export class BuscarCursoPorCodigoController extends BaseController {

    constructor(
        private buscarCursoPorCodigoUseCase: BuscarCursoPorCodigoUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const listaCursos = await this.buscarCursoPorCodigoUseCase.execute({codigo});
        return response.status(200).send(listaCursos);
    }

}