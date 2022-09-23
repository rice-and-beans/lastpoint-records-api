import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IPesquisarUsuarioRequestDTO } from "../../../model/usuarioDTO";

export class PesquisarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(data: string){
        return await this.usuarioRepository.pesquisar(
            data ? data : null
        );
    }

}