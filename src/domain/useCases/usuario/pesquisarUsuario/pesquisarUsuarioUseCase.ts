import { IUsuarioRepository } from "../../../repositories/usuarioRepository";

export class PesquisarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(){
        return await this.usuarioRepository.pesquisar();
        
    }

}