import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ICriarChamadaRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class CriarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaChamadaExiste: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase,
        private validaAulaNaoExiste: ValidacaoBase
    ){}

    async execute(data: ICriarChamadaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.usuarioCodigo, "usuarioCodigo"],
            [data.aulaCodigo, "aulaCodigo"],
            [data.presenca, "presenca"],
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaChamadaExiste.valida(data);

        await this.validaUsuarioNaoExisteCodigo.valida({"codigo": data.usuarioCodigo});
        await this.validaAulaNaoExiste.valida({"codigo": data.aulaCodigo});

        const chamada = new Chamada(data);
        await this.chamadaRepository.salvar(chamada);
    }

}