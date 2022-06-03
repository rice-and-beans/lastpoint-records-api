import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IdeletarTurmaRequestDTO } from "../../../model/turma/deletarTurmaDTO";

export class DeletarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository
    ){}

    async execute(data: IdeletarTurmaRequestDTO){
        const codigo = data.codigo;
        await this.turmaRepository.deletar(codigo);
    }

}