import { IAulaRepository } from "../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../model/aulaDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroExistenteException } from "../../exceptions/registroExistenteException";

export class ValidaAulaNaoExiste extends ValidacaoBase {

    constructor(
        private aulaRepository: IAulaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidaula = dadosValidacao as ICriarAulaRequestDTO;
        const aulaRecuperado = await this.aulaRepository.buscarPorCodigo(dadosValidaula.codigo);
        if(!aulaRecuperado){
            throw new RegistroExistenteException('Aula não existe');
        }
    }
    
}