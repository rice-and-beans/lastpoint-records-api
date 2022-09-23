import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { IDisciplinaRepository } from "../../repositories/disciplinaRepository.ts";
import { ICriarDisciplinaRequestDTO } from "../../model/disciplinaDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaDisciplinaExiste extends ValidacaoBase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidDisciplina = dadosValidacao as ICriarDisciplinaRequestDTO;
        const disciplinaRecuperado = await this.disciplinaRepository.buscarPorCodigo(dadosValidDisciplina.codigo);
        if(disciplinaRecuperado){
            throw new RegistroExistenteException('Disciplina já existe');
        }
    }
    
}