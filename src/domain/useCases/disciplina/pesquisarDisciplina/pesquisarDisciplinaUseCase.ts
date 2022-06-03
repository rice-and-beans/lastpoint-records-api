import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";

export class PesquisarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(){
        return await this.disciplinaRepository.pesquisar();
    }

}