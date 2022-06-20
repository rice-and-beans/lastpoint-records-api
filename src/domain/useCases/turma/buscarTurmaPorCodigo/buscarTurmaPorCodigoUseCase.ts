import { Turma } from "../../../../data/entities/turma";
import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IPesquisarTurmaPorCodigoRequestDTO } from "../../../model/turmaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarTurmaPorCodigoUseCase {

    constructor(
        private turmaRepository: ITurmaRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarTurmaPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.turmaRepository.buscarPorCodigo(data.codigo);
    }

}