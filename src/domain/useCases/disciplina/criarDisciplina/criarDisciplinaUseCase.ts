import { Disciplina } from "../../../../data/entities/disciplina";
import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { ICriarDisciplinaRequestDTO } from "../../../model/disciplina/criarDisciplinaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository
    ){}

    async execute(data: ICriarDisciplinaRequestDTO){
        const disciplina = new Disciplina(data);
        await this.disciplinaRepository.salvar(disciplina);
    }

}