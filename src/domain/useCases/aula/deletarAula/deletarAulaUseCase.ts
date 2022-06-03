import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IdeletarAulaRequestDTO } from "../../../model/aula/deletarAulaDTO";

export class DeletarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(data: IdeletarAulaRequestDTO){
        const codigo = data.codigo;
        await this.aulaRepository.deletar(codigo);
    }

}