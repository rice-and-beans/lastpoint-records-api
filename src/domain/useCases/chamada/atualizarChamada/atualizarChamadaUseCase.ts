import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IAtualizarChamadaRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class AtualizarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaChamadaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarChamadaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaChamadaNaoEncontrado.valida(data);
        const chamada = new Chamada(data);
        await this.chamadaRepository.atualizar(chamada);
    }

}