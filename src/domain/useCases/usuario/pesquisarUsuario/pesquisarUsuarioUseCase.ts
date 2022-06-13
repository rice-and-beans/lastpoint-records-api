import { IUsuarioRepository } from "../../../repositories/usuarioRepository";

export class PesquisarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(nome?: string){
        if(nome){
            return await this.usuarioRepository.pesquisar(nome);
        }else{
            return await this.usuarioRepository.pesquisar();
        }
    }

}