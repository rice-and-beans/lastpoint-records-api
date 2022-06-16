import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IDeletarCursoRequestDTO } from "../../../model/cursoDTO";

export class DeletarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(data: IDeletarCursoRequestDTO){
        const codigo = data.codigo;
        await this.cursoRepository.deletar(codigo);
    }

}