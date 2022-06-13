import { Chamada } from "../../../../data/entities/chamada";
import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { ICriarChamadaRequestDTO } from "../../../model/chamada/criarChamadaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository
    ){}

    async execute(data: ICriarChamadaRequestDTO){
        const chamada = new Chamada(data);
        await this.chamadaRepository.salvar(chamada);
    }

}