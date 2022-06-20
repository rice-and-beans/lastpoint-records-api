import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IPesquisarAulaPorCodigoRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarAulaPorCodigoUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarAulaPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.aulaRepository.buscarPorCodigo(data.codigo);
    }

}