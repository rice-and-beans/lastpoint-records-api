import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IPesquisarAulaRequestDTO } from "../../../model/aula/pesquisarAulaDTO";
import { Aula } from "../../../../data/entities/aula";

export class PesquisarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data?: IPesquisarAulaRequestDTO){
        if(data){
            return await this.aulaRepository.pesquisar(data);
        }else{
            return await this.aulaRepository.pesquisar();
        }
    }

}