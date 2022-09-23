import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaTokenRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarAulaTokenUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarAulaTokenRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.token, "token"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaAulaNaoEncontrado.valida(data);
        await this.aulaRepository.adicionarToken(data);
    }

}