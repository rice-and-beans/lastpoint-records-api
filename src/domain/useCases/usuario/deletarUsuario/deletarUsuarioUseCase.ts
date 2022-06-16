import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IDeletarUsuarioRequestDTO } from "../../../model/usuarioDTO";

export class DeletarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(data: IDeletarUsuarioRequestDTO){
        const codigo = data.codigo;
        await this.usuarioRepository.deletar(codigo);
    }

}