import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IPesquisarChamadaPorCodigoRequestDTO } from "../../../model/chamadaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarChamadaPorCodigoUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarChamadaPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.chamadaRepository.buscarPorCodigo(data.codigo);
    }

}