import { Curso } from "../../../../data/entities/curso";
import { ICursoRepository } from "../../../repositories/cursoRepository";
import { ICriarCursoRequestDTO } from "../../../model/cursoDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository,
        private ValidaCursoExiste: ValidacaoBase
    ){}

    async execute(data: ICriarCursoRequestDTO){
        await this.ValidaCursoExiste.valida(data);
        const curso = new Curso(data);
        await this.cursoRepository.salvar(curso);
    }

}