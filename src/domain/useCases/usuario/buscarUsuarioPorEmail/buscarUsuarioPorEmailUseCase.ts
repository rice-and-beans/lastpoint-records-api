import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IPesquisarUsuarioPorEmailRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class BuscarUsuarioPorEmailUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
    ){}

    async execute(data: IPesquisarUsuarioPorEmailRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.email, "email"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        return await this.usuarioRepository.buscarPorEmail(data.email);
    }

}