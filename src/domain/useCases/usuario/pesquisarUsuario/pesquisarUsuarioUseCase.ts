import { IUsuarioRepository } from "../../../repositories/usuarioRepository";

export class PesquisarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(campo?: string){
        if(campo){
            return await this.usuarioRepository.pesquisar(campo);
        }else{
            return await this.usuarioRepository.pesquisar();
        }
    }

}