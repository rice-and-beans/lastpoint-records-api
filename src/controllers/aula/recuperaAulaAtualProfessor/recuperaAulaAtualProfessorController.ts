import { Request, Response } from "express";
import { RecuperaAulaProfessorAtualUseCase } from "../../../domain/useCases/aula/recuperaAulaProfessorAtual/recuperaAulaProfessorAtualUseCase";
import { BaseControllerAuth } from "../../baseControllerAuth";

export class RecuperaAulaProfessorAtualController extends BaseControllerAuth {

    constructor(
        private recuperaAulaProfessorAtualUseCase: RecuperaAulaProfessorAtualUseCase,
    ){
        super()
    }

    async execute(request: Request, response: Response): Promise<Response>{
        const codUsuario = request.query.codUsuario as string;
        const codAula = request.query.codAula as string;
        const aula = await this.recuperaAulaProfessorAtualUseCase.execute(codUsuario, codAula);
        return response.status(200).send(aula);
    }

}