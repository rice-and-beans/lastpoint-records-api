import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class HistoricoAulasFuturasProfessorUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoEncontrado: ValidacaoBase        
    ){}

    async execute(codigo: string){
        const dadosValidacao = new Map<Object, string>([
            [codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida({"codigo": codigo});
        return await this.aulaRepository.historicoAulasFuturasProfessor(codigo);
    }

}