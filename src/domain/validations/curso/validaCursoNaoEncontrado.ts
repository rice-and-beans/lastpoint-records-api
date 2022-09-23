import { ICursoRepository } from "../../repositories/cursoRepository";
import { ICriarCursoRequestDTO } from "../../model/cursoDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaCursoNaoEncontrado extends ValidacaoBase {

    constructor(
        private cursoRepository: ICursoRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidcurso = dadosValidacao as ICriarCursoRequestDTO;
        const cursoRecuperado = await this.cursoRepository.buscarPorCodigo(dadosValidcurso.codigo);
        if(!cursoRecuperado){
            throw new RegistroNaoEncontradoException('Curso não encontrado');
        }
    }
    
}