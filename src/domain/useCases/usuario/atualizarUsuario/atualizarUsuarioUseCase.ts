import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IAtualizarUsuarioRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase
    ){}

    async execute(data: IAtualizarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoExisteCodigo.valida(data);
        const usuario = new Usuario(data);
        await this.usuarioRepository.atualizar(usuario);
    }

}