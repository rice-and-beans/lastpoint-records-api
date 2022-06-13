import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";

export class PesquisarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(nome?: string){
        if(nome){
            return await this.disciplinaRepository.pesquisar(nome);
        }else{
            return await this.disciplinaRepository.pesquisar();
        }
    }

}