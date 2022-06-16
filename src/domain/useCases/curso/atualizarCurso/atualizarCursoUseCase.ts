import { Curso } from "../../../../data/entities/curso";
import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IAtualizarCursoRequestDTO } from "../../../model/cursoDTO";

export class AtualizarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(data: IAtualizarCursoRequestDTO){
        const curso = new Curso(data);
        await this.cursoRepository.atualizar(curso);
    }

}