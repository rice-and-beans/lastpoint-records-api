import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IdeletarcursoRequestDTO } from "../../../model/curso/deletarCursoDTO";

export class DeletarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(data: IdeletarcursoRequestDTO){
        const codigo = data.codigo;
        await this.cursoRepository.deletar(codigo);
    }

}