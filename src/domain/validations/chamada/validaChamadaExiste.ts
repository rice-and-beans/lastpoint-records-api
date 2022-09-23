import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { IChamadaRepository } from "../../repositories/chamadaRepository";
import { ICriarChamadaRequestDTO } from "../../model/chamadaDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaChamadaExiste extends ValidacaoBase {

    constructor(
        private aulaRepository: IChamadaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidChamada = dadosValidacao as ICriarChamadaRequestDTO;
        const chamadaRecuperado = await this.aulaRepository.buscarPorCodigo(dadosValidChamada.codigo);
        if(chamadaRecuperado){
            throw new RegistroExistenteException('Chamada já existe');
        }
    }
    
}