import { IAulaRepository } from "../../../repositories/aulaRepository";

export class PesquisarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(){
        return await this.aulaRepository.pesquisar();
    }

}