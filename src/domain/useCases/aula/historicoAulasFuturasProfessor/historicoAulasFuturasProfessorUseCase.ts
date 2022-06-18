import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class HistoricoAulasFuturasProfessorUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase
    ){}

    async execute(codigo: string){
        const data = {"codigo": codigo}
        await this.ValidaUsuarioNaoEncontrado.valida(data);
        return await this.aulaRepository.historicoAulasFuturasProfessor(codigo);
    }

}