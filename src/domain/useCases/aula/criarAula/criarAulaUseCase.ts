import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private ValidaCursoExiste: ValidacaoBase
    ){}

    async execute(data: ICriarAulaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.datahorainicio, "datahorainicio"],
            [data.datahorafim, "datahorafim"],
            [data.nome, "nome"],
            [data.usuarioCodigo, "usuarioCodigo"],
            [data.turmaCodigo, "turmaCodigo"],
            [data.disciplinaCodigo, "disciplinaCodigo"],
            [data.cursoCodigo, "cursoCodigo"],
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.ValidaCursoExiste.valida(data);
        const aula = new Aula(data);
        await this.aulaRepository.salvar(aula);
    }

}