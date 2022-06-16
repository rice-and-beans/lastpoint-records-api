import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class AtualizarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarAulaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaAulaNaoEncontrado.valida(data);
        const aula = new Aula(data);
        await this.aulaRepository.atualizar(aula);
    }

}