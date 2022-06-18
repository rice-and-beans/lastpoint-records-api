import { RegistroExistenteException } from "../../exceptions/registroExistenteException";
import { IUsuarioRepository } from "../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../model/usuarioDTO";
import { ValidacaoBase } from "../ValidacaoBase";

export class ValidaUsuarioNaoExisteCodigo extends ValidacaoBase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidUsuario = dadosValidacao as ICriarUsuarioRequestDTO;
        const usuarioRecuperado = await this.usuarioRepository.buscarPorCodigo(dadosValidUsuario.codigo);
        if(!usuarioRecuperado){
            throw new RegistroExistenteException('Usuario não existe');
        }
    }
    
}