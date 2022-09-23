import { IRecuperaChamadaJaFeitaRequestDTO } from "../../../model/chamadaDTO";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class RecuperaChamadaJafeitaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private validaParamsObrigatorios: ValidacaoBase,
        private validaUsuarioNaoEncontrado: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IRecuperaChamadaJaFeitaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codUsuario, "codigoUsuario"],
            [data.codAula, "codigoAula"]
        ]);
        const codUsuario = {"codigo": data.codUsuario}
        const codAula = {"codigo": data.codAula}
        await this.validaParamsObrigatorios.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida(codUsuario);
        await this.validaAulaNaoEncontrado.valida(codAula);
        return await this.chamadaRepository.recuperaChamadaJafeita(data);
    }

}