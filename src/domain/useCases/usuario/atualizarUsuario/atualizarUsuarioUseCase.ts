import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IAtualizarUsuarioRequestDTO } from "../../../model/usuario/atualizarUsuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class AtualizarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(data: IAtualizarUsuarioRequestDTO){
        const usuario = new Usuario(data);
        await this.usuarioRepository.atualizar(usuario);
    }

}