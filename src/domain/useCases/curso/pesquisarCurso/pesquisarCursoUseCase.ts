import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IPesquisarCursoRequestDTO } from "../../../model/cursoDTO";

export class PesquisarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(data: IPesquisarCursoRequestDTO){
        return await this.cursoRepository.pesquisar(
            data ? data.campo : null
        );
    }

}