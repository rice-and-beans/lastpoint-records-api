import { IChamadaRepository } from "../../../repositories/chamadaRepository";
import { IDeletarChamadaRequestDTO } from "../../../model/chamadaDTO";

export class DeletarChamadaUseCase {

    constructor(
        private chamadaRepository: IChamadaRepository
    ){}

    async execute(data: IDeletarChamadaRequestDTO){
        const codigo = data.codigo;
        await this.chamadaRepository.deletar(codigo);
    }

}