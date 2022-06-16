import { Disciplina } from "../../../../data/entities/disciplina";
import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IAtualizarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";

export class AtualizarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(data: IAtualizarDisciplinaRequestDTO){
        const disciplina = new Disciplina(data);
        await this.disciplinaRepository.atualizar(disciplina);
    }

}