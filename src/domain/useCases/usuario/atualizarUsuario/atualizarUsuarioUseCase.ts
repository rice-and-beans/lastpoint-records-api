import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IAtualizarUsuarioRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class AtualizarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida(data);
        const usuario = new Usuario(data);
        
        await this.usuarioRepository.atualizar(usuario);
    }

}