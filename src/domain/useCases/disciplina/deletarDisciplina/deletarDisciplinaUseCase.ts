import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IDeletarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";

export class DeletarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(data: IDeletarDisciplinaRequestDTO){
        const codigo = data.codigo;
        await this.disciplinaRepository.deletar(codigo);
    }

}