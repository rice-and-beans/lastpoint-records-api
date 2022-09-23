import { IUsuarioRepository } from "../../repositories/usuarioRepository";
import { IAtualizarUsuarioRequestDTO } from "../../model/usuarioDTO";
import { ValidacaoBase } from "../validacaoBase";
import { RegistroNaoEncontradoException } from "../../exceptions/registroNaoEncontradoException";

export class ValidaUsuarioNaoEncontrado extends ValidacaoBase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        protected proximo?: ValidacaoBase,
    ){
        super(proximo)
    }

    public async verifica(dadosValidacao: Object){
        const dadosValidUsuario = dadosValidacao as IAtualizarUsuarioRequestDTO;
        const usuarioRecuperado = await this.usuarioRepository.buscarPorEmail(dadosValidUsuario.email);
        if(!usuarioRecuperado){
            throw new RegistroNaoEncontradoException('Email de Usuário não existe');
        }
    }
    
}