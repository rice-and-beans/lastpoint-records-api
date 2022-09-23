import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { IAulaRepository } from "../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../model/aulaDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaAulaExiste extends ValidacaoBase {

    constructor(
        private aulaRepository: IAulaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidAula = dadosValidacao as ICriarAulaRequestDTO;
        const aulaRecuperado = await this.aulaRepository.buscarPorCodigo(dadosValidAula.codigo);
        if(aulaRecuperado){
            throw new RegistroExistenteException('Aula já existe');
        }
    }
    
}