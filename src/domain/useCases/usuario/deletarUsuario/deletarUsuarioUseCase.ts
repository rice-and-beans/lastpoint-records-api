import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IDeletarUsuarioRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/validacaoBase";

export class DeletarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoExisteCodigo: ValidacaoBase
    ){}

    async execute(data: IDeletarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoExisteCodigo.valida(data);
        await this.usuarioRepository.deletar(data.codigo);
    }

}