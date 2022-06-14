import { Usuario } from "../../../../data/entities/usuario";
import { IUsuarioRepository } from "../../../repositories/usuarioRepository";
import { ICriarUsuarioRequestDTO } from "../../../model/usuario/criarUsuarioDTO";
import { ValidacaoBase } from "../../../validations/ValidacaoBase";

export class CriarUsuarioUseCase {

    constructor(
        private usuarioRepository: IUsuarioRepository,
        private validaUsuarioExiste: ValidacaoBase,
        private validaParamObrigatorio: ValidacaoBase
    ){}

    async execute(data: ICriarUsuarioRequestDTO){
        const dadosValidacao = new Map<Object, string>([
            [data.senha, "senha"],
            [data.codigo, "codigo"],
            [data.nome, "nome"],
            [data.tipo, "tipo"],
            [data.email, "email"]
        ]);
        await this.validaParamObrigatorio.valida(dadosValidacao);
        await this.validaUsuarioExiste.valida(data);
        const usuario = new Usuario(data);
        await this.usuarioRepository.salvar(usuario);
    }

}