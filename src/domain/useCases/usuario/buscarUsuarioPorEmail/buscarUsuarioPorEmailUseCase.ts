import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IPesquisarUsuarioPorEmailRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class BuscarUsuarioPorEmailUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaUsuarioNaoEncontrado: ValidacaoBase,
        private validaParamObrigatorio: ValidacaoBase
    ){}

    async execute(data: IPesquisarUsuarioPorEmailRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.email, "email"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida(data);
        await this.usuarioRepository.buscarPorEmail(data.email)
       
        return await this.usuarioRepository.buscarPorEmail(data.email);
    }

}