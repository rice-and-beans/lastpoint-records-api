import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IPesquisarUsuarioPorCodigoRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class BuscarUsuarioPorCodigoUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarUsuarioPorCodigoRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.usuarioRepository.buscarPorCodigo(data.codigo);
    }

}