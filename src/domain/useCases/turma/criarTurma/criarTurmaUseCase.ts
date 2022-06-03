import { Turma } from "../../../../data/entities/turma";
import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { ICriarTurmaRequestDTO } from "../../../model/turma/criarTurmaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(data: ICriarTurmaRequestDTO){
        const turma = new Turma(data);
        await this.turmaRepository.salvar(turma);
    }

}