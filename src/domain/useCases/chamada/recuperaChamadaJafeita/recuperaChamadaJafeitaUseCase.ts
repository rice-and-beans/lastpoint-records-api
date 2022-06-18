import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class RecuperaChamadaJafeitaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaUsuarioNaoEncontrado: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase,
        private validaParamsObrigatorios: ValidacaoBase
    ){}

    async execute(data){
        const dadosValidacao = new Map<Object, string>([
            [data.codusuario, "codigoUsuario"],
            [data.codaula, "codigoAula"]
        ]);
        const codUsuario = {"codigo": data.codusuario}
        const codAula = {"codigo": data.codaula}
        await this.validaParamsObrigatorios.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida(codUsuario);
        await this.validaAulaNaoEncontrado.valida(codAula);
        return await this.chamadaRepository.recuperaChamadaJafeita(data);
    }

}