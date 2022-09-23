import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class HistoricoAulasPassadasProfessorUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase
    ){}

    async execute(codigo: string){
        const dadosValidacao = new Map<Object, string>([
            [codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.ValidaUsuarioNaoEncontrado.valida({"codigo": codigo});
        return await this.aulaRepository.historicoAulasPassadasProfessor(codigo);
    }

}