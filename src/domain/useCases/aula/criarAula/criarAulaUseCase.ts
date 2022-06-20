import { Aula } from "../../../../data/entities/aula";
import { IAulaRepository } from "../../../repositories/aulaRepository";
import { ICriarAulaRequestDTO } from "../../../model/aulaDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class CriarAulaUseCase {

    constructor(
        private aulaRepository: IAulaRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaAulaExiste: ValidacaoBase,
        private validaTurmaNaoEncontrado: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase,
        private validaDisciplinaNaoEncontrado: ValidacaoBase,
        private validaCursoNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: ICriarAulaRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"],
            [data.dataHoraInicio, "dataHoraInicio"],
            [data.dataHoraFim, "dataHoraFim"],
            [data.nome, "nome"],
            [data.usuarioCodigo, "usuarioCodigo"],
            [data.turmaCodigo, "turmaCodigo"],
            [data.disciplinaCodigo, "disciplinaCodigo"],
            [data.cursoCodigo, "cursoCodigo"],
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaAulaExiste.valida({"codigo": data.codigo});
        await this.validaTurmaNaoEncontrado.valida({"codigo": data.turmaCodigo});
        await this.validaUsuarioNaoExisteCodigo.valida({"codigo": data.usuarioCodigo});
        await this.validaDisciplinaNaoEncontrado.valida({"codigo": data.disciplinaCodigo});
        await this.validaCursoNaoEncontrado.valida({"codigo": data.cursoCodigo});
        const aula = new Aula(data);
        await this.aulaRepository.salvar(aula);
    }

}