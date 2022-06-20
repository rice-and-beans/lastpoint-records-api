import { Turma } from "../../../../data/entities/turma";
import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { IAtualizarTurmaRequestDTO } from "../../../model/turmaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaTurmaNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarTurmaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaTurmaNaoEncontrado.valida(data);
        const turma = new Turma(data);
        await this.turmaRepository.atualizar(turma);
    }

}