import { IUsuarioRepository } from "../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../model/usuarioDTO";
import { ValidacaoBase } from "../ValidacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaUsuarioNaoEncontrado extends ValidacaoBase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidUsuario = dadosValidacao as ICriarUsuarioRequestDTO;
        const usuarioRecuperado = await this.usuarioRepository.buscarPorEmail(dadosValidUsuario.email);
        if(!usuarioRecuperado){
            throw new RegistroNaoEncontradoException('Usuario não encontrado');
        }
    }
    
}