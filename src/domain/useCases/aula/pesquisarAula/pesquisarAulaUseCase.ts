import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IPesquisarAulaRequestDTO } from "../../../model/aulaDTO";

export class PesquisarAulaUseCase{

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IPesquisarAulaRequestDTO){
        return await this.aulaRepository.pesquisar(data);
    }

}