import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class RecuperaAulaAlunoAtualUseCase{

    constructor(
        private aulaRepository: IAulaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase,
        private validaParamsObrigatorios: ValidacaoBase,
        private validaAulaNaoEncontrada: ValidacaoBase
    ){}

    async execute(codUsuario: string, codAula: string){
        const dadosValidacao = new Map<Object, string>([
            [codUsuario, "codUsuario"],
            [codAula, "codAula"]
        ]);
        await this.validaParamsObrigatorios.valida(dadosValidacao);
        await this.ValidaUsuarioNaoEncontrado.valida({"codigo": codUsuario});
        await this.validaAulaNaoEncontrada.valida({"codigo": codAula});
        return await this.aulaRepository.recuperaAulaAtualAluno({codUsuario, codAula});
    }

}