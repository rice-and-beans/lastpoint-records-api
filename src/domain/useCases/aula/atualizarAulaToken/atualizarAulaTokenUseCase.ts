import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaTokenRequestDTO } from "../../../model/aula/atualizarAulaTokenDTO";

export class AtualizarAulaTokenUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IAtualizarAulaTokenRequestDTO){
        const aula = data
        await this.aulaRepository.adicionarToken(aula);
    }

}