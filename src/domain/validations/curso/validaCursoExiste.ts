import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { ICursoRepository } from "../../repositories/cursoRepository";
import { ICriarCursoRequestDTO } from "../../model/cursoDTO";
import { ValidacaoBase } from "../validacaoBase";

export class ValidaCursoExiste extends ValidacaoBase {

    constructor(
        private cursoRepository: ICursoRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidCurso = dadosValidacao as ICriarCursoRequestDTO;
        const cursoRecuperado = await this.cursoRepository.buscarPorCodigo(dadosValidCurso.codigo);
        if(cursoRecuperado){
            throw new RegistroExistenteException('Curso já existe');
        }
    }
    
}