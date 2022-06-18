import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class NaAulaAtualUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase
    ){}

    async execute(codigo: string){
        const data = {"codigo": codigo}
        await this.ValidaUsuarioNaoEncontrado.valida(data);
        return await this.aulaRepository.naAulaAtual(codigo);
    }

}