import { ITurmaRepository } from "../../../repositories/turmaRepository";

export class PesquisarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(nome?:string){
        if(nome){
            return await this.turmaRepository.pesquisar(nome);
        }else{
        return await this.turmaRepository.pesquisar();
        }
    }

}