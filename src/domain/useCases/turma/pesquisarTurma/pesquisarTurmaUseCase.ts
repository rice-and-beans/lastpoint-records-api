import { ITurmaRepository } from "../../../repositories/turmaRepository";

export class PesquisarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(){
        return await this.turmaRepository.pesquisar();
    }

}