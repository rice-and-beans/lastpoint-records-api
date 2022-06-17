import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IPesquisarAulaRequestDTO } from "../../../model/aulaDTO";

export class HistoricoAulasPassadasAlunoUseCase{

    constructor(
        private aulaRepository: IAulaRepository
    ){}

    async execute(){
        return await this.aulaRepository.historicoAulasPassadasAluno();
    }

}