import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IAtualizarChamadaRequestDTO } from "../../../model/chamadaDTO";

export class AtualizarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository
    ){}

    async execute(data: IAtualizarChamadaRequestDTO){
        const chamada = new Chamada(data);
        await this.chamadaRepository.atualizar(chamada);
    }

}