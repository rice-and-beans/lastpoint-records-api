import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { JaFeitaChamadaUseCase } from "../../../domain/useCases/chamada/jaFeitaChamada/jaFeitaChamadaUseCase";

export class JaFeitaChamadaController extends BaseController {

    constructor(
        private jaFeitaChamadaUseCase: JaFeitaChamadaUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const {codusuario, codaula} = request.body;
        const listaChamada = await this.jaFeitaChamadaUseCase.execute({
            codusuario,
            codaula
        });
        return response.status(200).send(listaChamada);
    }

}