import { IChamadaRepository } from "../../repositories/chamadaRepository";
import { ICriarChamadaRequestDTO } from "../../model/chamadaDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaChamadaNaoEncontrado extends ValidacaoBase {

    constructor(
        private chamadaRepository: IChamadaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidchamada= dadosValidacao as ICriarChamadaRequestDTO;
        const chamadaRecuperado = await this.chamadaRepository.buscarPorCodigo(dadosValidchamada.codigo);
        if(!chamadaRecuperado){
            throw new RegistroNaoEncontradoException('Chamada não encontrado');
        }
    }
    
}