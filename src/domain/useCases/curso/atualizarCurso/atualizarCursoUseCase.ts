import { Curso } from "../../../../data/entities/curso";
import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IAtualizarCursoRequestDTO } from "../../../model/cursoDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaCursoNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarCursoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaCursoNaoEncontrado.valida(data);
        const curso = new Curso(data);
        await this.cursoRepository.atualizar(curso);
    }

}