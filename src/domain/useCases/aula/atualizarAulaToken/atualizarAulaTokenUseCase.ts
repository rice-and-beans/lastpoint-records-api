import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaTokenRequestDTO } from "../../../model/aulaDTO";

export class AtualizarAulaTokenUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IAtualizarAulaTokenRequestDTO){
        await this.aulaRepository.adicionarToken(data);
    }

}