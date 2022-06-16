import { Turma } from "../../../../data/entities/turma";
import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IAtualizarTurmaRequestDTO } from "../../../model/turmaDTO";

export class AtualizarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(data: IAtualizarTurmaRequestDTO){
        const turma = new Turma(data);
        await this.turmaRepository.atualizar(turma);
    }

}