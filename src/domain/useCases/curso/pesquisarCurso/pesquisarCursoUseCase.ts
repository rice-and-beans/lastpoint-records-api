import { ICursoRepository } from "../../../repositories/cursoRepository";

export class PesquisarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(nome?: string){
        if(nome){
            return await this.cursoRepository.pesquisar(nome);
        }else{
            return await this.cursoRepository.pesquisar();
        }
    }

}