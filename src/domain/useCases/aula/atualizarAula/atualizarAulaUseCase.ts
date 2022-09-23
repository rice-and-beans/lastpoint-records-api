import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { IAtualizarAulaRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class AtualizarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaAulaNaoEncontrado: ValidacaoBase,
        private validaTurmaNaoEncontrado: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase,
        private validaDisciplinaNaoEncontrado: ValidacaoBase,
        private validaCursoNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IAtualizarAulaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaAulaNaoEncontrado.valida({"codigo": data.codigo});
        await this.validaTurmaNaoEncontrado.valida({"codigo": data.turmaCodigo});
        await this.validaUsuarioNaoExisteCodigo.valida({"codigo": data.usuarioCodigo});
        await this.validaDisciplinaNaoEncontrado.valida({"codigo": data.disciplinaCodigo});
        await this.validaCursoNaoEncontrado.valida({"codigo": data.cursoCodigo});
        const aula = new Aula(data);
        await this.aulaRepository.atualizar(aula);
    }

}