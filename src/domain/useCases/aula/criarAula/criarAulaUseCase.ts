import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../../model/aula/criarAulaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: ICriarAulaRequestDTO){
        const aula = new Aula(data);
        await this.aulaRepository.salvar(aula);
    }

}