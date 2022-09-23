import { ICursoRepository } from "../../../repositories/cursoRepository";
import { IPesquisarCursoPorCodigoRequestDTO } from "../../../model/cursoDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarCursoPorCodigoUseCase {

    constructor(
        private cursoRepository: ICursoRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarCursoPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.cursoRepository.buscarPorCodigo(data.codigo);
    }

}