import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ICriarChamadaRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private ValidaCursoExiste: ValidacaoBase
    ){}

    async execute(data: ICriarChamadaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.usuarioCodigo, "usuarioCodigo"],
            [data.aulaCodigo, "aulaCodigo"],
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.ValidaCursoExiste.valida(data);
        const chamada = new Chamada(data);
        await this.chamadaRepository.salvar(chamada);
    }

}