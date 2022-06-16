import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { IDeletarUsuarioRequestDTO } from "../../../model/usuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class DeletarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaParamObrigatorio: ValidacaoBase,
        private validaUsuarioNaoEncontrado: ValidacaoBase
    ){}

    async execute(data: IDeletarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.codigo, "codigo"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioNaoEncontrado.valida(data);
        const codigo = data.codigo;
        await this.usuarioRepository.deletar(codigo);
    }

}