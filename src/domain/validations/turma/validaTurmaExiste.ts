import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { ITurmaRepository } from "../../repositories/turmaRepository";
import { ICriarTurmaRequestDTO } from "../../model/turma/criarTurmaDTO";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaTurmaExiste extends ValidacaoBase {

    constructor(
        private turmaRepository: ITurmaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidTurma = dadosValidacao as ICriarTurmaRequestDTO;
        const turmaRecuperado = await this.turmaRepository.buscarPorCodigo(dadosValidTurma.codigo);
        if(turmaRecuperado){
            throw new RegistroExistenteException('Turma já existe');
        }
    }
    
}