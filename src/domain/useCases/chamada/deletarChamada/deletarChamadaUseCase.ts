import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IDeletarChamadaRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaChamadaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarChamadaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaChamadaNaoEncontrado.valida(data);
        await this.chamadaRepository.deletar(data.codigo);
    }

}