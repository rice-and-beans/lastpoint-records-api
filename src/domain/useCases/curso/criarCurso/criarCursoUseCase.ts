import { Curso } from "../../../../data/entities/curso";
import { ICursoRepository } from "../../../repositories/cursoRepository";
import { ICriarCursoRequestDTO } from "../../../model/cursoDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class CriarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private ValidaCursoExiste: ValidacaoBase
    ){}

    async execute(data: ICriarCursoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.nome, "nome"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.ValidaCursoExiste.valida(data);
        const curso = new Curso(data);
        await this.cursoRepository.salvar(curso);
    }

}