import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IDeletarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaDisciplinaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarDisciplinaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaDisciplinaNaoEncontrado.valida(data);
        await this.disciplinaRepository.deletar(data.codigo);
    }

}