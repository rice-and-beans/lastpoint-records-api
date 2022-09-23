import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IDeletarAulaRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarAulaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaAulaNaoEncontrado.valida(data);
        await this.aulaRepository.deletar(data.codigo);
    }

}