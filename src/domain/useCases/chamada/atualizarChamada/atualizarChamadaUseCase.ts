import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IAtualizarChamadaRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaChamadaNaoEncontrado: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase,
        private validaAulaNaoExiste: ValidacaoBase
    ){}

    async execute(data: IAtualizarChamadaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);

        await this.validaParamObrigatorio.valida(dadosValidacao);

        if(data.usuarioCodigo){
            await this.validaUsuarioNaoExisteCodigo.valida({"codigo": data.usuarioCodigo});
        }
        if(data.aulaCodigo){
            await this.validaAulaNaoExiste.valida({"codigo": data.aulaCodigo});
        }

        await this.validaChamadaNaoEncontrado.valida(data);
        const chamada = new Chamada(data);
        await this.chamadaRepository.atualizar(chamada);
    }

}