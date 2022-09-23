import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IPesquisarDisciplinaPorCodigoRequestDTO } from "../../../model/disciplinaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarDisciplinaPorCodigoUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository,
        private validaParamObrigatorio: ValidacaoBase
    ){}

    async execute(data: IPesquisarDisciplinaPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.disciplinaRepository.buscarPorCodigo(data.codigo);
    }

}