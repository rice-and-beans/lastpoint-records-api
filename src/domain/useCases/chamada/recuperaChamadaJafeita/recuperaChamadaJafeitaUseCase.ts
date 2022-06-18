import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class RecuperaChamadaJafeitaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase,
        private ValidaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data){
        const codUsuario = {"codigo": data.codusuario}
        const codAula = {"codigo": data.codaula}
        await this.ValidaUsuarioNaoEncontrado.valida(codUsuario);
        await this.ValidaAulaNaoEncontrado.valida(codAula);
        return await this.chamadaRepository.recuperaChamadaJafeita(data);
    }

}