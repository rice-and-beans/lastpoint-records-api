import { ITurmaRepository } from "../../../repositories/turmaRepository";

export class PesquisarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(campo?:string){
        if(campo){
            return await this.turmaRepository.pesquisar(campo);
        }else{
            return await this.turmaRepository.pesquisar();
        }
    }

}