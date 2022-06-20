import { IAulaRepository } from "../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../model/aulaDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaAulaNaoEncontrado extends ValidacaoBase {

    constructor(
        private aulaRepository: IAulaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidaula= dadosValidacao as ICriarAulaRequestDTO;
        const aulaRecuperado = await this.aulaRepository.buscarPorCodigo(dadosValidaula.codigo);
        
        if(!aulaRecuperado){
            throw new RegistroNaoEncontradoException('Aula não existe');
        }
    }
    
}