import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class RecuperaChamadaJafeitaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        private ValidaUsuarioNaoEncontrado: ValidacaoBase,
        private ValidaAulaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data){
        const codusuario = {"codigo": data.codusuario}
        const codaula = {"codigo": data.codaula}
        await this.ValidaUsuarioNaoEncontrado.valida(codusuario);
        await this.ValidaAulaNaoEncontrado.valida(codaula);
        return await this.chamadaRepository.recuperaChamadaJafeita(data);
    }

}