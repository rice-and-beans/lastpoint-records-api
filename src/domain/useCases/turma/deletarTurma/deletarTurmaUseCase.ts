import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IDeletarTurmaRequestDTO } from "../../../model/turmaDTO";

export class DeletarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(data: IDeletarTurmaRequestDTO){
        const codigo = data.codigo;
        await this.turmaRepository.deletar(codigo);
    }

}