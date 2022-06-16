import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IPesquisarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";

export class PesquisarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(data: string){
        return await this.disciplinaRepository.pesquisar(
            data ? data : null
        );
    }

}