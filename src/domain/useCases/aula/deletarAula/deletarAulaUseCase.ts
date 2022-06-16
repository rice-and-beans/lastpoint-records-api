import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IDeletarAulaRequestDTO } from "../../../model/aulaDTO";

export class DeletarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IDeletarAulaRequestDTO){
        const codigo = data.codigo;
        await this.aulaRepository.deletar(codigo);
    }

}