import { IChamadaRepository } from "../../../repositories/chamadaRepository";

export class PesquisarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository
    ){}

    async execute(){
        return await this.chamadaRepository.pesquisar();
    }

}