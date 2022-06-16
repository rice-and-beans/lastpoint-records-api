import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IPesquisarCursoRequestDTO } from "../../../model/cursoDTO";

export class PesquisarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(data: string){
        return await this.cursoRepository.pesquisar(
            data ? data : null
        );
    }

}