import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaRequestDTO } from "../../../model/aula/atualizarAulaDTO";

export class AtualizarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IAtualizarAulaRequestDTO){
        const aula = new Aula(data);
        await this.aulaRepository.atualizar(aula);
    }

}