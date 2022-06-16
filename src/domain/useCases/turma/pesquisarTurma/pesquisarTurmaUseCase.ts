import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IPesquisarTurmaRequestDTO } from "../../../model/turmaDTO";

export class PesquisarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(data: string){
        return await this.turmaRepository.pesquisar(
            data ? data : null
        );
    }

}