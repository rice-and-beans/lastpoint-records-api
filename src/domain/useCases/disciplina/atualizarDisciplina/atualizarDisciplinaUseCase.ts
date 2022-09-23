import { Disciplina } from "../../../../data/entities/disciplina";
import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { IAtualizarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaDisciplinaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarDisciplinaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaDisciplinaNaoEncontrado.valida(data);
        const disciplina = new Disciplina(data);
        await this.disciplinaRepository.atualizar(disciplina);
    }

}