import { Request, Response } from "express";
import { BaseController } from "../../BaseController";
import { RecuperaAulaProfessorAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaProfessorAtual/recuperaAulaProfessorAtualUseCase";

export class RecuperaAulaProfessorAtualController extends BaseController {

    constructor(
        private recuperaAulaProfessorAtualUseCase: RecuperaAulaProfessorAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codigo = request.query.codigo as string;
        const aula = await this.recuperaAulaProfessorAtualUseCase.execute(codigo);
        return response.status(200).send(aula);
    }

}