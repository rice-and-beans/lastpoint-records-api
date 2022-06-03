import { ICursoRepository } from "../../../repositories/cursoRepository";

export class PesquisarCursoUseCase {

    constructor(
        private cursoRepository: ICursoRepository
    ){}

    async execute(){
        return await this.cursoRepository.pesquisar();
    }

}