import { ITurmaRepository } from "../../repositories/turmaRepository";
import { ICriarTurmaRequestDTO } from "../../model/turmaDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaTurmaNaoEncontrado extends ValidacaoBase {

    constructor(
        private turmaRepository: ITurmaRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidTurma = dadosValidacao as ICriarTurmaRequestDTO;
        const turmaRecuperado = await this.turmaRepository.buscarPorCodigo(dadosValidTurma.codigo);
        if(!turmaRecuperado){
            throw new RegistroNaoEncontradoException('Turma não encontrada');
        }
    }
    
}