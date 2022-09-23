import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IPesquisarChamadaRequestDTO } from "../../../model/chamadaDTO";

export class PesquisarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository
    ){}

    async execute(data: IPesquisarChamadaRequestDTO){
        return await this.chamadaRepository.pesquisar(
            data ? data : null
        );
    }

}