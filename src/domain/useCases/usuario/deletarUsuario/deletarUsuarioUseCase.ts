import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IdeletarUsuarioRequestDTO } from "../../../model/usuario/deletarUsuarioDTO";

export class DeletarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(data: IdeletarUsuarioRequestDTO){
        const codigo = data.codigo;
        await this.usuarioRepository.deletar(codigo);
    }

}