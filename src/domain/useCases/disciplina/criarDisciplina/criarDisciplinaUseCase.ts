import { Disciplina } from "../../../../data/entities/disciplina";
import { IDisciplinaRepository } from "../../../repositories/disciplinaRepository.ts";
import { ICriarDisciplinaRequestDTO } from "../../../model/disciplinaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";


export class CriarDisciplinaUseCase {

    constructor(
        private disciplinaRepository: IDisciplinaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaDisciplinaExiste: ValidacaoBase
    ){}

    async execute(data: ICriarDisciplinaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.nome, "nome"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaDisciplinaExiste.valida(data);
        const disciplina = new Disciplina(data);
        await this.disciplinaRepository.salvar(disciplina);
    }

}