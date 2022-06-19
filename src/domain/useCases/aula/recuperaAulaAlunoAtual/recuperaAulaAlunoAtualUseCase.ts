import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class RecuperaAulaAlunoAtualUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase,
        private validaParamsObrigatorios: ValidacaoBase
    ){}

    async execute(codigo: string){
        const dadosValidacao = new Map<Object, string>([
            [codigo, "codigo"]
        ]);
        const data = {"codigo": codigo}
        await this.validaParamsObrigatorios.valida(dadosValidacao);
        await this.ValidaUsuarioNaoEncontrado.valida(data);
        return await this.aulaRepository.recuperaAulaAtualAluno(codigo);
    }

}