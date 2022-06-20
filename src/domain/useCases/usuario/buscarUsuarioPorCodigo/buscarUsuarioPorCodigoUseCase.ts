import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IPesquisarUsuarioPorCodigoRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarUsuarioPorCodigoUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase
    ){}

    async execute(data: IPesquisarUsuarioPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoExisteCodigo.valida(data);
        return await this.usuarioRepository.buscarPorCodigo(data.codigo);
    }

}