import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IPesquisarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";

export class PesquisarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(data: IPesquisarDisciplinaRequestDTO){
        return await this.disciplinaRepository.pesquisar(
            data ? data.campo : null
        );
    }

}