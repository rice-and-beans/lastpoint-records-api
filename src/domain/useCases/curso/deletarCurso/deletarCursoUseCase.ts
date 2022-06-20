import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IDeletarCursoRequestDTO } from "../../../model/cursoDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaCursoNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarCursoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaCursoNaoEncontrado.valida(data);
        await this.cursoRepository.deletar(data.codigo);
    }

}