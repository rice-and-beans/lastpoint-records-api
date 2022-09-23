import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IDeletarTurmaRequestDTO } from "../../../model/turmaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaTurmaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarTurmaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaTurmaNaoEncontrado.valida(data);
        await this.turmaRepository.deletar(data.codigo);
    }

}