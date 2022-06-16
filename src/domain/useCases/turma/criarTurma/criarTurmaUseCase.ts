import { Turma } from "../../../../data/entities/turma";
import { ITurmaRepository } from "../../../repositories/turmaRepository";
import { ICriarTurmaRequestDTO } from "../../../model/turmaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarTurmaUseCase {

    constructor(
        private turmaRepository: ITurmaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaTurmaExiste: ValidacaoBase
    ){}

    async execute(data: ICriarTurmaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.nome, "nome"],
            [data.descricao, "descricao"],
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        const turma = new Turma(data);
        await this.turmaRepository.salvar(turma);
    }
 
}